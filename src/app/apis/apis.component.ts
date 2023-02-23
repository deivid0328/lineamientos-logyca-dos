import { Component, OnInit } from '@angular/core';
import * as dataInfo from '../dataInfo';

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.scss']
})
export class ApisComponent implements OnInit {

  dataText = dataInfo;
  cardHead = this.dataText.apis;

  constructor() { }

  ngOnInit(): void {
  }

}
