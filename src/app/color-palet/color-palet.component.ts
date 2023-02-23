import { Component, OnInit } from '@angular/core';
import * as dataInfo from '../dataInfo';

@Component({
  selector: 'app-color-palet',
  templateUrl: './color-palet.component.html',
  styleUrls: ['./color-palet.component.scss']
})
export class ColorPaletComponent implements OnInit {

  dataText = dataInfo;
  cardHead = this.dataText.colorPaletHead;
  colorsInfo = this.dataText.colorPaletInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
