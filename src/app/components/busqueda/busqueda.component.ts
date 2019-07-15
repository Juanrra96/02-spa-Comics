import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {
  
  @Input() heroes:Heroe[] = [];
  @Input() termino:string;
  @Input() index: number;

  constructor(private activatedRoute:ActivatedRoute,
              private _heroesServices: HeroesService,
              private router:Router) {

               }

  ngOnInit() {

   this.activatedRoute.params.subscribe( params =>{
     this.termino=params['termino'];
     this.heroes = this._heroesServices.buscarHeroes( params['termino'] );
     console.log(this.heroes);
   });

  }



  verHeroe(){
    console.log( this.index );
    this.router.navigate( ['/heroe', this.index] );
  }
}
