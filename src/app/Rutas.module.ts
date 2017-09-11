import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {ServicesListadoService} from './servicios/services-listado.service';
import { RouterModule, Routes } from '@angular/router';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { LoginComponent } from './componentes/login/login.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { MenuBodyComponent } from './componentes/menu-body/menu-body.component';
import { ListadoDeResultadosComponent } from './componentes/listado-de-resultados/listado-de-resultados.component';
import { MenuDeListadoComponent } from './componentes/menu-de-listado/menu-de-listado.component';
import { PrincipalComponent } from './componentes/principal/principal.component';

// declaro donde quiero que se dirija
const MiRuteo=
[
  {path:'',component:LoginComponent},
  {path:'Principal',component:PrincipalComponent},
  {path:'Juego',component: MenuBodyComponent,
            children:[
            {path:'adivina',component:AdivinaElNumeroComponent},
            {path:'agilidad',component:AgilidadAritmeticaComponent}
            ]
  },
  {path:'menu',component: MenuComponent},
  {path:'Estadisticas',component: MenuDeListadoComponent,
        children:[
        {path:'ListadoDeResultados',component: ListadoDeResultadosComponent},
        {path:'MenuDeListado',component: MenuDeListadoComponent}
  ]},
  ];
@NgModule({
  imports: [
    RouterModule.forRoot(MiRuteo)
  ],
  exports: [
    RouterModule
  ]
})
export class RuteandoModule { }
