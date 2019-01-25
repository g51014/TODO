import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodobodyComponent } from './todobody/todobody.component';
import { InputAreaComponent } from './todobody/input-area/input-area.component';
import { CardsAreaComponent } from './todobody/cards-area/cards-area.component';

@NgModule({
  declarations: [TodoHeaderComponent, TodolistComponent, TodobodyComponent, InputAreaComponent, CardsAreaComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TodolistComponent
  ]
})
export class TodoModule { }
