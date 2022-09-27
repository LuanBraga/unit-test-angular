import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from './shared/models/todo.model';
import { TodoService } from './shared/services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'unit-test-angular';

  subscriptions$: Subscription[] = [];
  todos: Todo[];

  constructor(private todoService: TodoService) { }

  subscriptions: Subscription[];

  ngOnInit(): void {
    this.subscriptions$.push(
      this.todoService.getTodos().subscribe({
        next: todos => this.todos = todos,
        error: err => { },
        complete: () => console.log(this.todos)
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions$.forEach(sub => sub.unsubscribe());
  }
  
}
