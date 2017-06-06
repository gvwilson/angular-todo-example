import { Filter } from 'app/to-do/to-do-filter/to-do-filter.type';
import { Injectable } from '@angular/core';

@Injectable()
export class ToDoFilterActions {

  static readonly FILTERACTIONS = {
    SHOW_ALL: 'angular-training/TODO/SHOW_ALL',
    SHOW_COMPLETED: 'angular-training/TODO/SHOW_COMPLETED',
    SHOW_DELETED: 'angular-training/TODO/SHOW_DELETED',
  };

  showAll() {
    return {
      type: ToDoFilterActions.FILTERACTIONS.SHOW_ALL
    };
  }

  showCompleted() {
    return {
      type: ToDoFilterActions.FILTERACTIONS.SHOW_COMPLETED
    };
  }

  showDeleted() {
    return {
      type: ToDoFilterActions.FILTERACTIONS.SHOW_DELETED
    };
  }
}
