import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private Route:ActivatedRoute,
    private router: Router) { }
 //constructor (){}


  ngOnInit() {
  }


   OpcionMenu(Opcion:string)
     {
       switch(Opcion)
      {
         case 'agilidad':
         this.router.navigate(['/agilidad']);
         break;
         case 'adivina':
         this.router.navigate(['/adivina']);     
         break;
         case 'menuBody':
         this.router.navigate(['/menuBody']);     
         break;
       }

    }

}
