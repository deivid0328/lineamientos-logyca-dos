import { Component, OnInit } from '@angular/core';
import * as dataInfo from '../dataInfo';

@Component({
  selector: 'app-look-and-feel',
  templateUrl: './look-and-feel.component.html',
  styleUrls: ['./look-and-feel.component.scss']
})
export class LookAndFeelComponent implements OnInit {

  dataText = dataInfo;
  cardHead = this.dataText.lookAndFeelHead;

  constructor() { }

  ngOnInit(): void {
  }

}
