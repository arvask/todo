import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { TaskService } from './task.service';


@NgModule({
  declarations: [TaskComponent],
  imports: [
    CommonModule,
    TaskRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    TaskService
  ]
})
export class TaskModule { }
