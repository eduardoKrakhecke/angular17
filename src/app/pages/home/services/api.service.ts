import { Injectable, signal } from '@angular/core';
import {BehaviorSubject, Observable, tap} from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "@environments/environment";

interface ITask {
  id: string,
  title: string
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //novo
  public name = signal('Eduardo')

  //antiga
  public name$ = new BehaviorSubject('Eduardo $')

  //ou #http = inject(HttpClient)
  constructor(private _http: HttpClient) { }

  #url = signal(environment.BASE_URL)

  #setListTask = signal<ITask[] | null>(null)
  public getListTasks = this.#setListTask.asReadonly()

  public listTask$(): Observable<ITask[]> {
    return this._http.get<ITask[]>(this.#url()).pipe(
      (tap((res) => this.#setListTask.set(res)))
    )
  }

  #setTaskId = signal<ITask | null>(null)
  get getTaskId() {
    return this.#setTaskId.asReadonly()
  }
  public taskId$(id: string): Observable<ITask> {
    return this._http.get<ITask>(`${this.#url()}${id}`).pipe(
      (tap((res) => this.#setTaskId.set(res)))
    )
  }

  #setTaskCreate = signal<ITask | null>(null)
  get getTaskCreate() {
    return this.#setTaskCreate.asReadonly()
  }
  public taskCreate$(title: string): Observable<ITask> {
    return this._http.post<ITask>(this.#url(), { title }).pipe(
      (tap((res) => this.#setTaskCreate.set(res)))
    )
  }

  #setTaskUpdate = signal<ITask | null>(null)
  get getTaskUpdate() {
    return this.#setTaskUpdate.asReadonly()
  }
  public taskUpdate$(id: string, title: string): Observable<ITask> {
    return this._http.patch<ITask>(`${this.#url()}${id}`, { title }).pipe(
      (tap((res) => this.#setTaskUpdate.set(res)))
    )
  }

}
