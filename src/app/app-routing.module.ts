import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './mycomps/todos/todos.component';
import { AboutComponent } from './mycomps/about/about.component';

  const routes: Routes = [
    { 
      path: '',
      component: TodosComponent 
    },
    { path: 'about', component: AboutComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
