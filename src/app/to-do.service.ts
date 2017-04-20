import { Injectable } from '@angular/core';

@Injectable()
export class ToDoService {

  items: string[] = [];

  constructor() { }

  addItem(item: string) {
    this.items.push(item);
  }
}
