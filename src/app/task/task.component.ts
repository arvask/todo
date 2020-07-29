import { Component, OnInit } from '@angular/core';
import { AuthService } from '../share/service/auth.service';
import { Task } from '../share/models/task';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  todoList: Task[] = [];
  displayedColumns: string[] = ['id', 'name', 'description', 'createdAt', 'editedAt', 'action'];

  constructor(private au: AuthService, private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((data) => {
      this.todoList = data;
    })
  }

  editTask(task: Task) {
  }

  deleteTask(id: string) {
  }
}
