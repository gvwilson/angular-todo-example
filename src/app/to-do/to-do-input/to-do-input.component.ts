import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-to-do-input',
  templateUrl: './to-do-input.component.html',
  styleUrls: ['./to-do-input.component.css']
})
export class ToDoInputComponent implements OnInit {

  @Output() onAddToDoItem: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addToDo(text: HTMLInputElement) {
    this.onAddToDoItem.emit(text.value);
    text.value = '';
  }
}
