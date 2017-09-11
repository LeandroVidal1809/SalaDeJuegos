import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

import {firebase}  from 'firebase/database';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Usuario:String = "";
  Pass:String = "";
  ingreso:boolean=false;
  users: FirebaseListObservable<any[]>;  
  constructor(private Route:ActivatedRoute,
    private router: Router,db: AngularFireDatabase) {
      this.users=db.list('/usuariolabo');
      this.users.push("otro");

     }
  
  Entrar()
  {
  if(this.Usuario=='admin@admin.com' && this.Pass=='123'){
   this.ingreso=true;
   this.router.navigate(['/Principal']);     
  }
  else
  {
    this.ingreso=false;
  }
}
  ngOnInit() {
  }

}
