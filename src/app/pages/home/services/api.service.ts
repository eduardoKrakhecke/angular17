import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
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

  public listTask$(): Observable<ITask[]> {
    return this._http.get<ITask[]>(this.#url())
  }

}
