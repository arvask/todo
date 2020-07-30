import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from '../../share/models/task';

@Injectable()
export class TaskService {
  private readonly url = 'http://localhost:3000/todo/';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get(this.url)
      .pipe(map((tasks: Task[]) => tasks.map((task: Task) => new Task(task))));
  }

  getTaskById(id: string): Task {
    return this.http.get(this.url + `?id=${id}`)
    .pipe(map((tasks: Task[]) => tasks.map((task: Task) => new Task(task))))[0];
  }

  addTask(task: Task) {
    return this.http.post(this.url, task)
  }

  edit(task: Task) {
   return this.http.patch(this.url + `${task.id}`, task)
  }

  deleteTask(id: string) {
    return this.http.delete(this.url + id);
  }
}
