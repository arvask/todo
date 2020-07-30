import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../share/service/auth.service';
import { Task } from '../../share/models/task';
import { TaskService } from '../services/task.service';
import { ModalProviderService } from '../services/modal-provider.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  todoList: Task[] = [];
  displayedColumns: string[] = ['id', 'name', 'description', 'createdAt', 'editedAt', 'action'];

  constructor(private au: AuthService, private taskService: TaskService, private modalProvider: ModalProviderService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  private getTasks() {
    this.taskService.getTasks().subscribe((data) => {
      this.todoList = data;
    })
  }

  editOrCreateTask(task: Task = null) {
    this.modalProvider.editTask(task)
      .afterClosed().subscribe(() => {this.getTasks()});
  }

  deleteTask(id: string) {
    this.taskService.deleteTask(id)
      .subscribe(() => {this.getTasks()});
  }
}
