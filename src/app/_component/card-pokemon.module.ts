import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { CardPokemonComponent } from './card-pokemon/card-pokemon.component';
import { CardItemComponent } from './card-item/card-item.component';

const COMP = [
  CardPokemonComponent,
  CardItemComponent
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
