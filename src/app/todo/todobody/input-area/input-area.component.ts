import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-input-area',
  templateUrl: './input-area.component.html',
  styleUrls: ['./input-area.component.css']
})
export class InputAreaComponent implements OnInit {
  @Input() length: any;
  constructor() { }
  @Output() add = new EventEmitter<any>();
  ngOnInit() {
  }
  DoAdd(title) {
    if ( title !== '') {
      this.add.emit({
      'title': title,
      'content': 'Double click to modify',
      'complete': false,
      'id': this.length + 1 ,
      'bgColor': 'rgb(174, 238, 195)'});
    }
  }
}
