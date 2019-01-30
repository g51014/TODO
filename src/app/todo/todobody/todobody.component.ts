import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-todobody',
  templateUrl: './todobody.component.html',
  styleUrls: ['./todobody.component.css']
})
export class TodobodyComponent implements OnInit {
  data: any;
  cardsInfo: any;
  cardsMargin: number;
  cardsWidth: number;
  padding: number;
  colNum: number;
  constructor() {
   }
  ngOnInit() {
    this.data = [];
    this.padding = 50;
    this.cardsWidth = 300;
    this.colNum = 3;
    this.cardsInfo = {'padding': '', 'cardsWidth': '', 'cardsMargin': ''};
    window.onresize = () => {this.SetCards(); } ;
  }
  SetCards() {
    this.cardsMargin = (document.body.clientWidth -  (this.cardsWidth * this.colNum) - (this.padding * 2)) / 6 - 30;
    if (document.body.clientWidth < 1200) {
      this.cardsWidth = 150;
    } else {
      this.cardsWidth = 300;
    }
    this.cardsInfo = {'padding': this.padding, 'cardsWidth': this.cardsWidth, 'cardsMargin': this.cardsMargin};
  }
  DoAdd(obj: any) {
    this.SetCards();
    this.data.push(obj);
  }
  DoDelete(id: number) {
    this.data = this.data.filter(
      (data) => {
        return data.id !== id;
      }
    );
  }
  DoEdit(obj) {
    this.data = this.data.map(
      (e) => {
        if (e.id === obj.id) {
          return Object.assign({}, e , obj);
        }
        return e;
      }
    );
  }
}
