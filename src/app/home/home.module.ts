import { DetailCardComponent } from './../detail-card/components/detail-card.component';
import { AppRoutingModule } from './../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CardPokemonComponent } from './../card-pokemon/card-pokemon.component';
import { HomeComponent } from './components/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [HomeComponent,CardPokemonComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ]
})
export class HomeModule { }
