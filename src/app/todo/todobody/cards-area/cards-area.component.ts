import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-cards-area',
  templateUrl: './cards-area.component.html',
  styleUrls: ['./cards-area.component.css']
})
export class CardsAreaComponent implements OnInit {
  @Input() data;
  @Input() cardsInfo;
  @Output() delete = new EventEmitter<any>();
  @Output() edit = new EventEmitter<any>();
  editStatus: boolean;
  buttonTitle: string;
  title: string;
  id: number;
  content: string;
  constructor() { }
  ngOnInit() {
    this.buttonTitle = 'complete';
    this.editStatus = false;
    this.title = this.data.title;
    this.id = this.data.id;
    this.content = this.data.content;
  }
  DoDelete(id: number) {
    this.delete.emit(Number(id));
  }
  DoEdit(id: number, content: string) {
    this.editStatus = !this.editStatus;
    if (content !== undefined && content !== '') {
      this.edit.emit({id: Number(id), content: content});
    }
  }
  CancleEdit() {
    this.editStatus = false;
  }
}
