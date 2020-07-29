import { Component, OnInit } from '@angular/core';
import { AuthService } from '../share/service/auth.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  constructor(private au: AuthService) { }

  ngOnInit(): void {
  }
}
