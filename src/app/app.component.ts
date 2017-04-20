import { Component } from '@angular/core';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { Observable } from 'rxjs/Observable';

import { ToDoService } from './to-do.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'To Do';

  constructor(private toDoService: ToDoService) { }

  onNewItem(item: string) {
    this.toDoService.addItem(item);
  }

  todoCount() {
    return this.toDoService.items.length;
  }
}
