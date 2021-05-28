import { Component, Input, OnInit } from '@angular/core';
import { SimplifiedPokemon } from 'src/app/_models/pokemon.model';

@Component({
  selector: 'hcg-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {
  @Input() pokemon: SimplifiedPokemon;
  constructor() { }

  ngOnInit(): void {
  }

}
