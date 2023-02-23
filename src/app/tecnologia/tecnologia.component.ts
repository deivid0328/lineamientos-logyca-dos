import { Component, OnInit } from '@angular/core';
import * as dataInfo from '../dataInfo';

@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.scss']
})
export class TecnologiaComponent implements OnInit {

  dataText = dataInfo;

  displayedColumns = this.dataText.displayColumns;
  dataSource = this.dataText.technologyYTableCell;

  cardHead = this.dataText.tecnologyHead;


  constructor() { }
  

  ngOnInit(): void {
  }

  

}
