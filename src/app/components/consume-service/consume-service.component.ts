import {Component, inject, OnInit, signal} from '@angular/core';
import { ApiService } from "@app/pages/home/services/api.service";
import { toSignal } from "@angular/core/rxjs-interop";
import { concatMap } from "rxjs";

interface ITask {
  id: string,
  title: string
}

@Component({
  selector: 'app-consume-service',
  standalone: false,
  templateUrl: './consume-service.component.html',
  styleUrl: './consume-service.component.scss'
})
export class ConsumeServiceComponent implements OnInit{

  #apiService = inject(ApiService)

  // constructor(private _apiService: ApiService) {
  // }

  public getTask = signal<null | ITask[]>(null)

  public getTasks$ = this.#apiService.listTask$()
  public getTasksSignal$ = toSignal(this.#apiService.listTask$())
  public getListTask = this.#apiService.getListTasks
  public getTaskId = this.#apiService.getTaskId

  ngOnInit(): void {
    console.log(this.#apiService.name())

    this.#apiService.name$.subscribe({
      next: (next)=> {console.log(next)},
      error: (error)=> {console.log(error)},
      complete: ()=> { console.log('completou')}
    })

    this.#apiService.name$.next('Agora Dudu')

    this.getTasks$.subscribe({
      next: (next)=> {
        this.getTask.set(next)
        console.log(next)
      },
      error: (error)=> {console.log(error)},
      complete: ()=> { console.log('ok')}
    })

    this.#apiService.taskId$('kyH36tpgZO5c00SYI1oZ').subscribe()
  }

   public taskCreate(title: string) {
     return this.#apiService
       .taskCreate$(title)
       .pipe(concatMap(()=> this.#apiService.listTask$()))
       .subscribe({
       next: (next) => { console.log(next) },
       error: (error) => { console.log(error) }
     })
   }

  public taskUpdate(id: string, title: string) {
    return this.#apiService
      .taskUpdate$(id, title)
      .pipe(concatMap(()=> this.#apiService.listTask$()))
      .subscribe({
        next: (next) => { console.log(next) },
        error: (error) => { console.log(error) }
      })
  }

}
