import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {ServicesListadoService} from './servicios/services-listado.service';
//import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { RouterModule, Routes } from '@angular/router';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { LoginComponent } from './componentes/login/login.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { MenuBodyComponent } from './componentes/menu-body/menu-body.component';
import { ListadoDeResultadosComponent } from './componentes/listado-de-resultados/listado-de-resultados.component';
import { MenuDeListadoComponent } from './componentes/menu-de-listado/menu-de-listado.component';

//mport { JuegoComponent } from 'Clase/juego/juego.component';
let miRuteo=[
  {path:'adivina',component:AdivinaElNumeroComponent},
  {path:'agilidad',component:AgilidadAritmeticaComponent},
  {path:'',component:LoginComponent},
  {path:'menu',component: MenuComponent},
  {path:'menuBody',component: MenuBodyComponent},
  {path:'ListadoDeResultados',component: ListadoDeResultadosComponent},
  {path:'MenuDeListado',component: MenuDeListadoComponent}
          ];
@NgModule({
  declarations: [
    AppComponent,
    AdivinaElNumeroComponent,
    AgilidadAritmeticaComponent,
    LoginComponent,
    MenuComponent,
    MenuBodyComponent,
    ListadoDeResultadosComponent,
    MenuDeListadoComponent
   // JuegoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(miRuteo),
    HttpModule
  ],
  providers: [ServicesListadoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }


