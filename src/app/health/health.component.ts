import { Component, OnInit } from '@angular/core';
import * as dataInfo from '../dataInfo';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent implements OnInit {

  dataText = dataInfo;

  cardHead = this.dataText.healthTokenHead;

  codeHealthUnToken = `
    [{
    "name": "parametros",
    "status": "Fail",
    "description": "Error en parametros"
    }]`;

  codeHealthToken = `
    [{
    "name": "response simple default",
    "status": "OK",
    "description": "ms responding"
    },
    {
    "name": "storageaccount",
    "status": "OK",
    "description": "Connection ok"
    },
    {
    "name": "ms relacionado",
    "status": "OK",
    "description": "Microservicio web respondiendo correctamente"
    },
    {
    "name": "SSL",
    "status": "OK",
    "description": "Certificate www.logycacolabora.com will expire in 114 days on 2022-07-30 18:59 -0500/-05."
    },
    {
    "name": "rediscolabora",
    "status": "OK",
    "description": "Comando ping correcto, respuesta PONG"
    }]`;
 
  constructor() { }

  ngOnInit(): void {
  }

}
