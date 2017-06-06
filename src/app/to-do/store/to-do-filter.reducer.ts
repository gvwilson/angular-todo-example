import { ToDoFilterActions } from './to-do-filter.actions';
import { Action } from '@ngrx/store';

export function ToDoFilterReducer(state = {}, action: Action) {

  return { filterBy: action.type };

  // switch (action.type) {
  //   case ToDoFilterActions.FILTERACTIONS.SHOW_ALL:
  //     return { filterBy: action.type };
  //   case ToDoFilterActions.FILTERACTIONS.SHOW_COMPLETED:
  //     return { filterBy: action.type };
  //   default:
  //     return state;
  // }
}

