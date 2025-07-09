import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private _http: HttpClient) { }

  getAllTodos() {
    return this._http.get("http://localhost:8080/getAll");
  }
  AddTask(title : string) {
    return this._http.post("http://localhost:8080/add?title="+ title, null);
  }
  DeleteTask(id : number) {
    return this._http.delete("http://localhost:8080/del/" + id);
  }
  EditTask(id : number, title : string) {
    return this._http.put("http://localhost:8080/edit/" + id + "?title=" + title, null);
  }
  ToggleTask(id: number) {
    return this._http.put("http://localhost:8080/toggle/" + id, null);
  }
}
