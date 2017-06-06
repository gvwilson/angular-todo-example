import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { ToDoFilterActions } from './../store/to-do-filter.actions';
import { ToDoActions } from './../store/to-do.actions';
import { AppState } from './../store/to-do.store';
import { IToDoItem } from '../to-do.type';
import { Filter } from '../to-do-filter/to-do-filter.type';

@Component({
  selector: 'app-to-do-container',
  templateUrl: './to-do-container.component.html',
  styleUrls: ['./to-do-container.component.css']
})
export class ToDoContainerComponent implements OnInit {

  todoItems$: Observable<any>;
  todoFilter$: Observable<any>;

  constructor(
    private store: Store<AppState>,
    private todoActions: ToDoActions,
    private todoFilterActions: ToDoFilterActions
  ) {
    this.todoItems$ = this.store.select('todoItems');
    this.todoFilter$ = this.store.select('toDoFilterReducer');
  }

  ngOnInit() {
  }

  onAddToDoItem(text: string) {
    const item: IToDoItem = {
      text,
      completed: false
    };

    this.store.dispatch(this.todoActions.addItem(item));
  }

  onDeleteToDoItem(item: IToDoItem) {
    this.store.dispatch(this.todoActions.deleteItem(item));
  }

  onToggleToDoItem(item: IToDoItem) {
    this.store.dispatch(this.todoActions.toggleItem(item));
  }

  onFiterToDoItem(filter: Filter) {
    this.store.dispatch(this.todoFilterActions.showAll());
  }

}
