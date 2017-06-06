import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Filter } from 'app/to-do/to-do-filter/to-do-filter.type';

@Component({
  selector: 'app-to-do-filter',
  templateUrl: './to-do-filter.component.html',
  styleUrls: ['./to-do-filter.component.css']
})
export class ToDoFilterComponent implements OnInit {

  @Output() onFilterToDoItems: EventEmitter<Filter> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  filterToDoItems(filter: Filter) {
    this.onFilterToDoItems.emit(filter);
  }
}
