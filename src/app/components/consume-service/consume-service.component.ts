import {Component, inject, OnInit, signal} from '@angular/core';
import { ApiService } from "@app/pages/home/services/api.service";

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
  }

}
