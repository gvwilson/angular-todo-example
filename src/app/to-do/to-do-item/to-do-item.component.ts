import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IToDoItem } from './../to-do.type';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {

  @Input() todoItem: IToDoItem;

  constructor() { }

  ngOnInit() {
  }
}
