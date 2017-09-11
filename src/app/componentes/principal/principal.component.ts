import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private Route:ActivatedRoute,
    private router: Router) { }
  ngOnInit() {
  }
  OpcionMenu(Opcion:string)
  {
    switch(Opcion)
   {
      case 'juegos':
      this.router.navigate(['/Juego']);
      break;
      case 'estadistica':
      this.router.navigate(['/Estadistica']);     
      break;
      case 'menuBody':
      this.router.navigate(['/menuBody']);     
      break;
    }
  }
}
