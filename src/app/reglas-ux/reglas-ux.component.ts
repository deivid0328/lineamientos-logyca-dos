import { Component, OnInit } from '@angular/core';
import * as dataInfo from '../dataInfo';

@Component({
  selector: 'app-reglas-ux',
  templateUrl: './reglas-ux.component.html',
  styleUrls: ['./reglas-ux.component.scss']
})
export class ReglasUXComponent implements OnInit {

  dataText = dataInfo;
  cardHead = this.dataText.ruleUXUI;

  constructor() { }

  ngOnInit(): void {
  }

}
