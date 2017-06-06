import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { IToDoItem } from './../to-do.type';

@Injectable()
export class ToDoActions {

  static readonly TODO = {
    ADD_ITEM: 'angular-training/TODO/ADD_ITEM',
    ADD_ITEM_SUCCESS: 'angular-training/TODO/ADD_ITEM_SUCCESS',
    TOGGLE_ITEM: 'angular-training/TODO/TOGGLE_ITEM',
    TOGGLE_ITEM_SUCCESS: 'angular-training/TODO/TOGGLE_ITEM_SUCCESS',
    REMOVE_ITEM: 'angular-training/TODO/REMOVE_ITEM',
    REMOVE_ITEM_SUCCESS: 'angular-training/TODO/REMOVE_ITEM_SUCCESS',
    LOAD_ITEM: 'angular-training/TODO/LOAD_ITEM',
    LOAD_ITEM_SUCCESS: 'angular-training/TODO/LOAD_ITEM_SUCCESS',
  };

  getToDoItems(): Action {
    return {
      type: ToDoActions.TODO.LOAD_ITEM
    };
  }

  getToDoItemsSuccess(todoItems): Action {
    return {
      type: ToDoActions.TODO.LOAD_ITEM_SUCCESS,
      payload: todoItems
    };
  }

  addItem(item: IToDoItem) {
    return {
      type: ToDoActions.TODO.ADD_ITEM,
      payload: item,
    };
  }

  addItemSuccess(item: IToDoItem): Action {
    return {
      type: ToDoActions.TODO.ADD_ITEM_SUCCESS,
      payload: item
    };
  }

  toggleItem(item: IToDoItem) {
    return {
      type: ToDoActions.TODO.TOGGLE_ITEM,
      payload: item,
    };
  }

  toggleItemSuccess(item: IToDoItem) {
    return {
      type: ToDoActions.TODO.TOGGLE_ITEM_SUCCESS,
      payload: item,
    };
  }

  deleteItem(item: IToDoItem) {
    return {
      type: ToDoActions.TODO.REMOVE_ITEM,
      payload: item,
    };
  }
}
