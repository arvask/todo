import { Injectable } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Task } from '../../share/models/task';
import { EditTaskComponent } from '../components/edit-task/edit-task.component';

@Injectable({
  providedIn: 'root'
})
export class ModalProviderService {

  
  constructor(public dialog: MatDialog) {}

  editTask(task: Task) {
    //const dialogRef = 
    return this.dialog.open(EditTaskComponent, {
      width: '500px',
      data: task
    })

    // dialogRef.afterClosed().subscribe(result => {
    //   result;
    //   console.log('The dialog was closed');
    // });
  }
}
