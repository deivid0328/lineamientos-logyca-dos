import { Component, OnInit } from '@angular/core';
import * as dataInfo from '../dataInfo';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

  dataText = dataInfo;
  cardHead = this.dataText.brandHead;

  constructor() { }

  ngOnInit(): void {
  }

}
