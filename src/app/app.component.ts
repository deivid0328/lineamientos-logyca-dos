import { Component } from '@angular/core';
import * as dataInfo from '../app/dataInfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lineamientos LOGYCA';

  dataText = dataInfo;  

}



