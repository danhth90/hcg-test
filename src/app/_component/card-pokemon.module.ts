import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { CardPokemonComponent } from './card-pokemon.component';

const COMP = [
  CardPokemonComponent
]

@NgModule({
  declarations: [
    ...COMP
  ],
  imports: [
    CommonModule,
    NzModalModule
  ],
  exports: [
    ...COMP
  ]
})
export class CardPokemonModule { }
