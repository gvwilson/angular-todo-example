import { Component, OnInit, Input } from '@angular/core';
import { IToDoItem } from './../to-do.type';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  @Input() todoItems: IToDoItem[];

  constructor() { }

  ngOnInit() {
  }
}
