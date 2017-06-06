import { ToDoActions } from './to-do/store/to-do.actions';
import { AppState } from './to-do/store/to-do.store';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

constructor(
    private store: Store<AppState>,
    private todoActions: ToDoActions
  ) { }

  ngOnInit() {
    this.store.dispatch(this.todoActions.getToDoItems());
  }
}
