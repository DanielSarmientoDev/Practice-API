import { PokeSpecie } from './../../core/models/atributos/PokeSpecie.model';
import { pokemonModel } from './../../core/models/pokemon.model';
import { ApiService } from './../../core/services/api.services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.css']
})
export class DetailCardComponent implements OnInit {
  pokemon?:pokemonModel
  pokemonSpecie?: PokeSpecie
  constructor(
    private route: ActivatedRoute,
    private pokemonService:ApiService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) =>{
      const id = params.id;
      this.pokemonDetail(id);
      this.getPokemonSpecie(id);
    })
  }

  pokemonDetail(id: number){
    this.pokemonService.getPokemonid(id).subscribe((pokemon)=> {
      this.pokemon = pokemon
      console.log("este es el pokemon:",this.pokemon)
    })
  }
  getPokemonSpecie(id: number){
    this.pokemonService.getPokemonSpecie(id).subscribe((pokemonspecie)=> {
      this.pokemonSpecie = pokemonspecie;
      console.log("este es el pokemon:",this.pokemonSpecie)
    })
  }

}
