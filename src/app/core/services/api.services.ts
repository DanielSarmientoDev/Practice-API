import { pokemonModel } from './../models/pokemon.model';
import { environment } from './../../../environments/environment.prod';
import { responseModel } from './../models/response.model';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})

export class ApiService{
    
    constructor(private http:HttpClient){
    }
    public getData(){
        return this.http.get<responseModel>("https://pokeapi.co/api/v2/pokemon")
    }
    public getPokemonid(id: number){
        return this.http.get<pokemonModel>(`https://pokeapi.co/api/v2/pokemon/${id}`); 
    }
}