import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Usuario:String = "";
  Pass:String = "";
  ingreso:boolean=false;
  constructor(private Route:ActivatedRoute,
    private router: Router) { }
  
  Entrar()
  {
  if(this.Usuario=='admin@admin.com' && this.Pass=='123'){
   this.ingreso=true;
   this.router.navigate(['/menuBody']);     
  }
  else
  {
    this.ingreso=false;
  }
}
  ngOnInit() {
  }

}
