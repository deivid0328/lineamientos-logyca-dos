import { Component, OnInit } from '@angular/core';
import * as dataInfo from '../dataInfo';

@Component({
  selector: 'app-peticiones-http',
  templateUrl: './peticiones-http.component.html',
  styleUrls: ['./peticiones-http.component.scss']
})
export class PeticionesHTTPComponent implements OnInit {

  dataText = dataInfo;
  cardHead = this.dataText.requests;

  constructor() { }

  ngOnInit(): void {
  }

}
