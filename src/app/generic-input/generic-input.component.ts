import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-generic-input',
  templateUrl: './generic-input.component.html',
  styleUrls: ['./generic-input.component.css']
})
export class GenericInputComponent implements OnInit {

  @Output() newItem: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addToDo(newItemForm: NgForm) {
    this.newItem.emit(newItemForm.value.newItem);
  }
}
