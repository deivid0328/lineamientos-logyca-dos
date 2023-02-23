import { Component, OnInit } from '@angular/core';
import * as dataInfo from '../dataInfo';

@Component({
  selector: 'app-back-lineamientos-gen',
  templateUrl: './back-lineamientos-gen.component.html',
  styleUrls: ['./back-lineamientos-gen.component.scss']
})
export class BackLineamientosGenComponent implements OnInit {


  dataText = dataInfo;
  cardHead = this.dataText.guidlines;

  constructor() { }

  ngOnInit(): void {
  }

}
