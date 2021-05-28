import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { SafePipe } from '../_pipe/safe.pipe';
import { CardPokemonModule } from '../_component/card-pokemon.module';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [
    HomeComponent, 
    SafePipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzCarouselModule,
    NzButtonModule,
    CardPokemonModule
  ]
})
export class HomeModule { }
