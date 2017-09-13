import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule,AngularFireAuth, } from 'angularfire2/auth';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {firebase}  from 'firebase/database';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Usuario:string = "";
  Pass:string = "";
  ingreso:boolean=false;
  Mensaje:string="";
  routestring:string;
  retorna:string;
  prom:firebase
  constructor(private Route:ActivatedRoute,
              public router: Router,
              private _auth:AngularFireAuth) {}
              ngOnInit() {
              }
            

 async Entrar()
  {
  var result = await this._auth.auth.signInWithEmailAndPassword(this.Usuario,this.Pass)
                        .catch(function(error) {         
                            alert(error.message);
                            //console.log(error);
                            
                        });

                      if(result!=undefined){
                        this.router.navigate(['/Principal']);
                      }

  }

UserValido()
{
  this.Usuario="Leandro@Leandro.com";
  this.Pass="Leandro123";
  
  

}


async registrar(email:string,password:string)
{
try{
const result = await this._auth.auth.createUserWithEmailAndPassword(this.Usuario,this.Pass);
this.Mensaje=this.Usuario + " Fue ingresado Exitosamente!"
}
catch(e){
console.error(e);
this.Mensaje=e;
}

}
 
}
