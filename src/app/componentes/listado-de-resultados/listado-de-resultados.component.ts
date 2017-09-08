import { Component, OnInit,Input } from '@angular/core';
import{Juego} from '../../Clase/juego';

@Component({
  selector: 'app-listado-de-resultados',
  templateUrl: './listado-de-resultados.component.html',
  styleUrls: ['./listado-de-resultados.component.css']
})
export class ListadoDeResultadosComponent implements OnInit {

  // Nombre:string;
  // Jugador:string;
  // Gano:boolean;
  @Input() //
  ListadoDeResultados: any[]
  
  constructor() {
    // this.ListadoDeResultados= new Array();
   }

  ngOnInit() {
    console.info(this.ListadoDeResultados);
  }

}
