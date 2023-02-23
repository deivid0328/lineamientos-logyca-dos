import { Component, OnInit } from '@angular/core';
import * as dataInfo from '../dataInfo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataText = dataInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
