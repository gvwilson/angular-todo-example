import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Effect, Actions } from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import { ToDoService } from './../to-do.service';
import { ToDoActions } from './to-do.actions';

@Injectable()
export class ToDoEffects {
    @Effect() loadToDoItems$ = this.update$
        .ofType(ToDoActions.TODO.LOAD_ITEM)
        .switchMap(() => this.service.getToDoItems())
        .map(todoItems => this.todoActions.getToDoItemsSuccess(todoItems));

    @Effect() addToDoItem$ = this.update$
        .ofType(ToDoActions.TODO.ADD_ITEM)
        .map(action => action.payload)
        .switchMap(item => this.service.addItem(item))
        .map(item => this.todoActions.addItemSuccess(item));

    @Effect() toggleToDoItem$ = this.update$
        .ofType(ToDoActions.TODO.TOGGLE_ITEM)
        .map(action => action.payload)
        .switchMap(item => this.service.toggleItem(item))
        .map(item => this.todoActions.toggleItemSuccess(item));

    constructor(
        private update$: Actions,
        private todoActions: ToDoActions,
        private service: ToDoService,
    ) { }
}
