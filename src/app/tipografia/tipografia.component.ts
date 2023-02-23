import { Component, OnInit } from '@angular/core';
import * as dataInfo from '../dataInfo';

@Component({
  selector: 'app-tipografia',
  templateUrl: './tipografia.component.html',
  styleUrls: ['./tipografia.component.scss']
})
export class TipografiaComponent implements OnInit {

  dataText = dataInfo;
  cardHead = this.dataText.tipographicHead;

  constructor() { }

  ngOnInit(): void {
  }

}
