import { Component, OnInit } from '@angular/core';
import * as dataInfo from '../dataInfo';

@Component({
  selector: 'app-buenas-practicas-back',
  templateUrl: './buenas-practicas-back.component.html',
  styleUrls: ['./buenas-practicas-back.component.scss']
})
export class BuenasPracticasBackComponent implements OnInit {

  dataText = dataInfo;
  cardHead = this.dataText.bestPracticsBack;

  constructor() { }

  ngOnInit(): void {
  }

}
