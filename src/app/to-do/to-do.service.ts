import { IToDoItem } from './to-do.type';
import { ApiService } from './../api/api.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ToDoService {

  private changes: BehaviorSubject<any[]> = new BehaviorSubject([]);
  constructor(private apiService: ApiService) { }

  getToDoItems() {
    return this.apiService
      .get('/items');
  }

  addItem(item: IToDoItem) {
    return this.apiService
      .post('/items', item);
  }

  toggleItem(item: IToDoItem) {
    return this.apiService.
      put('/items/' + item.id, item);
  }
}
