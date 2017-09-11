import { Injectable } from '@angular/core';
import{Juego} from '../Clase/juego';

@Injectable()
export class ServicesListadoService {

  constructor() { }

  
  public listar() : Array<Juego>
  {
   let juego1:Juego;
   let juego2:Juego;
   let juego3:Juego;
   let juego4:Juego;
   let juego5:Juego;
   let juego6:Juego;
   let miArray : Array<Juego> = new Array<Juego>();
   juego1= new Juego();
   juego2= new Juego();
   juego3= new Juego();
   juego4= new Juego();
   juego5= new Juego();
   juego6= new Juego();
   juego1.Nombre="Nombre";
   juego1.Jugador="Jugador";
   juego1.Gano=true;
   miArray.push(juego1);
   juego2.Nombre="Nombre1";
   juego2.Jugador="Jugador1";
   juego2.Gano=false;
   miArray.push(juego2);
   juego3.Nombre="Nombre2";
   juego3.Jugador="Jugador2";
   juego3.Gano=true;
   miArray.push(juego3);
   juego4.Nombre="Nombre3";
   juego4.Jugador="Jugador3";
   juego4.Gano=false;
   miArray.push(juego4);
   juego5.Nombre="Nombre4";
   juego5.Jugador="Jugador7";
   juego5.Gano=false;
   miArray.push(juego5);
   juego6.Nombre="Nombre5";
   juego6.Jugador="Jugador5";
   juego6.Gano=false;
   miArray.push(juego6);
   return miArray;
    

  }

}
