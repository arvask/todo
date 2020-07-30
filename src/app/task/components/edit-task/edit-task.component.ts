import { Component, OnInit, Inject} from '@angular/core';
import { TaskService } from '../../services/task.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Task } from 'src/app/share/models/task';

@Component({
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
  formTask: FormGroup;
  title: string;
  
  constructor(private taskService: TaskService,
              private fb: FormBuilder,
              public dialogRef: MatDialogRef<EditTaskComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Task) {}

  ngOnInit(): void {
    this.initForm();
    if (this.data) {
      this.title = `Edit Task with id - ${this.data.id}`
      this.patchForm();
    } else {
      this.title = 'New Task'
    }

  }

  initForm(): void {
    console.log(this.data);
    this.formTask = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  patchForm(): void {
    this.formTask.patchValue({
      name: this.data.name,
      description: this.data.description
    });
  }

  deleteTask() {
    this.taskService.deleteTask(this.data.id)
      .subscribe(() => {}, (err) => console.error(err));;
  }

  updateTaskOrCreateTask() {
    if (this.data) {
      const task = new Task({
        id: this.data.id,
        name: this.getFormValue().name,
        description: this.getFormValue().description,
        editedAt: String(new Date()),
        createdAt: this.data.createdAt
      });

      this.taskService.edit(task).subscribe(() => {}, (err) => console.error(err));
    } else {
      const task = new Task({
        name: this.getFormValue().name,
        description: this.getFormValue().description,
        editedAt: '',
        createdAt: String(new Date()),
        id: String(Math.floor(Math.random()*10000))
      });

      this.taskService.addTask(task).subscribe(() => {}, (err) => console.error(err));
    }
  }

  private getFormValue(): {name: string; description: string} {
    console.log(this.formTask.getRawValue());
    return this.formTask.getRawValue();
  }

}
