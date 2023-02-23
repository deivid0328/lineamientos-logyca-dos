import { Component, OnInit } from '@angular/core';
import * as dataInfo from '../dataInfo';

@Component({
  selector: 'app-bem',
  templateUrl: './bem.component.html',
  styleUrls: ['./bem.component.scss']
})
export class BemComponent implements OnInit {

  dataText = dataInfo;
  cardHead = this.dataText.bem;

  constructor() { }

  ngOnInit(): void {
  }

}
