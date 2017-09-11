import { Component, OnInit } from '@angular/core';
import{Juego} from '../../Clase/juego';
import {ServicesListadoService} from '../../servicios/services-listado.service';
@Component({
  selector: 'app-menu-de-listado',
  templateUrl: './menu-de-listado.component.html',
  styleUrls: ['./menu-de-listado.component.css']
})
export class MenuDeListadoComponent implements OnInit {
listadoParaCompartir: any[];
service:ServicesListadoService;
constructor() {
  this.service= new ServicesListadoService();
  this.listadoParaCompartir=this.service.listar();
 }

  ngOnInit() {
  }

}
