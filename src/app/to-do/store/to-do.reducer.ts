import { Action } from '@ngrx/store';
import { IToDoItem } from './../to-do.type';
import { ToDoActions } from './to-do.actions';

const INITIAL_STATE: IToDoItem[] = [];

export function ToDoReducer(state = INITIAL_STATE, action: Action): IToDoItem[] {
  switch (action.type) {
    case ToDoActions.TODO.LOAD_ITEM_SUCCESS:
      return action.payload;
    case ToDoActions.TODO.ADD_ITEM:
      return [...state, action.payload];
    case ToDoActions.TODO.TOGGLE_ITEM:
      return state.map(todo => {
        if (todo.id !== action.payload.id) {
          return todo;
        }
        return Object.assign({}, todo, {
          completed: !todo.completed
        });
      });
    default:
      return state;
  }
};
