import { Component, OnInit } from '@angular/core';
import * as dataInfo from '../dataInfo';

@Component({
  selector: 'app-develop-map',
  templateUrl: './develop-map.component.html',
  styleUrls: ['./develop-map.component.scss']
})
export class DevelopMapComponent implements OnInit {

  dataText = dataInfo;
  cardHead = this.dataText.developMap;

  constructor() { }

  ngOnInit(): void {
  }

}
