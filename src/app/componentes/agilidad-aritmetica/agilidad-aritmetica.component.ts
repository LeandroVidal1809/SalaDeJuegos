import { Component, OnInit } from '@angular/core';
import{JuegoAgilidad} from '../../Clase/juegoAgilidad';
@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {

  juegoAritm:JuegoAgilidad
  constructor() {
    this.juegoAritm= new JuegoAgilidad();
    this.juegoAritm.NumeroGenerador=false;
    
    this.juegoAritm.cont=0;
    this.juegoAritm.NumeroGenerador=false;
   }

  ngOnInit() {
  }

}
