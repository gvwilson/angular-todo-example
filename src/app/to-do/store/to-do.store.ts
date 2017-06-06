import { IToDoItem } from '../to-do.type';
import { ToDoFilterReducer } from 'app/to-do/store/to-do-filter.reducer';
import { ToDoReducer } from 'app/to-do/store/to-do.reducer';
import {compose} from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';

export interface AppState {
    todoItems: IToDoItem[];
};

export const AppStore = compose(combineReducers)({
  todoItems: ToDoReducer,
  toDoFilterReducer: ToDoFilterReducer
});
