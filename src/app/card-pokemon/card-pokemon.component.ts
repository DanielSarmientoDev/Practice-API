import { responseModel } from './../core/models/response.model';
import { pokemonModel } from './../core/models/pokemon.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css']
})
export class CardPokemonComponent implements OnInit {
  
  @Input() responseModel?:pokemonModel;
  @Input() i?: number;

  constructor() { }

  ngOnInit(): void {
  }

}
