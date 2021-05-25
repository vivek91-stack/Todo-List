import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './mycomps/todos/todos.component';
import { TodoItemComponent } from './mycomps/todo-item/todo-item.component';
import { AddTodoComponent } from './mycomps/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './mycomps/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
