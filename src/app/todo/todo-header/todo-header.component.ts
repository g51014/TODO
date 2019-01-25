import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css']
})
export class TodoHeaderComponent implements OnInit {

  title: string;
  subtitle: string;
  height: any;
  @Output() enter = new EventEmitter<any>();
  constructor() { }
  ngOnInit() {
    this.title = 'todo';
    this.subtitle = 'W.Chiang';
  }
  DoEnter() {
    this.enter.emit(false);
  }
}
