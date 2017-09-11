import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {ServicesListadoService} from './servicios/services-listado.service';
import { RuteandoModule } from './Rutas.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

//import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { RouterModule, Routes } from '@angular/router';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { LoginComponent } from './componentes/login/login.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { MenuBodyComponent } from './componentes/menu-body/menu-body.component';
import { ListadoDeResultadosComponent } from './componentes/listado-de-resultados/listado-de-resultados.component';
import { MenuDeListadoComponent } from './componentes/menu-de-listado/menu-de-listado.component';
import { PrincipalComponent } from './componentes/principal/principal.component';


export const firebaseConfig = {
  apiKey: "AIzaSyDPOiGX5gFNmxcGvsDgkH_uH_DAAKL9H-w",
  authDomain: "usuariolabo.firebaseapp.com",
  databaseURL: "https://usuariolabo.firebaseio.com",
  projectId: "usuariolabo",
  storageBucket: "usuariolabo.appspot.com",
  messagingSenderId: "113033543860"
};

@NgModule({
  declarations: [
    AppComponent,
    AdivinaElNumeroComponent,
    AgilidadAritmeticaComponent,
    LoginComponent,
    MenuComponent,
    MenuBodyComponent,
    ListadoDeResultadosComponent,
    MenuDeListadoComponent,
    PrincipalComponent
   // JuegoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RuteandoModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  providers: [ServicesListadoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }


