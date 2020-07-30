import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './components/task.component';
import { TaskService } from './services/task.service';
import { ModalProviderService } from './services/modal-provider.service'
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { EditTaskComponent } from './components/edit-task/edit-task.component';


@NgModule({
  declarations: [TaskComponent, EditTaskComponent],
  imports: [
    CommonModule,
    TaskRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  providers: [
    TaskService,
    ModalProviderService
  ]
})
export class TaskModule { }
