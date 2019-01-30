import { Component, OnInit, Input, Output, EventEmitter, OnChanges , ViewChild, AfterViewInit} from '@angular/core';
import { fromEvent } from 'rxjs';
import {map , merge} from 'rxjs/operators';

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
  @ViewChild('redButton') redButton;
  @ViewChild('greenButton') greenButton;
  @ViewChild('yellowButton') yellowButton;
  editStatus: boolean;
  buttonTitle: string;
  title: string;
  id: number;
  bgColor: any;
  content: string;
  cardBgColor: any;
  constructor() {}
  ngOnInit() {
    this.bgColor = [
    {'color': 'red',  'value': 'rgb(245, 112, 112)'},
    {'color': 'green',  'value': 'rgb(174, 238, 195)'},
    {'color': 'yellow',  'value': 'rgb(245, 243, 112)'}
    ];
    this.buttonTitle = 'complete';
    this.editStatus = false;
    this.cardBgColor = this.data.bgColor;
    this.title = this.data.title;
    this.id = this.data.id;
    this.content = this.data.content;
    const redEvent = fromEvent(this.redButton.nativeElement, 'click').pipe(map(e => this.redButton.nativeElement.id));
    const greenEvent = fromEvent(this.greenButton.nativeElement, 'click').pipe(map(e => this.greenButton.nativeElement.id));
    const yellowEvent = fromEvent(this.yellowButton.nativeElement, 'click').pipe(map(e => this.yellowButton.nativeElement.id));
    const colorPickerEvent = redEvent.pipe(merge(greenEvent, yellowEvent)).subscribe(
      (e) => {
        for (let i = 0; i < this.bgColor.length; i++) {
          if (e === this.bgColor[i].color) {
            this.cardBgColor = this.bgColor[i].value;
            this.DoEdit(this.data.content);
          }
        }
      }
    );
  }
  DoDelete() {
    this.delete.emit(Number(this.id));
  }
  DoEdit(content: string) {
    this.editStatus = !this.editStatus;
    if (content !== undefined && content !== '') {
      this.edit.emit({id: Number(this.id), content: content, bgColor: this.cardBgColor});
    }
  }
  CancleEdit() {
    this.editStatus = false;
  }
}
