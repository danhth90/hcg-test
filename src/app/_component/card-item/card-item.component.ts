import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SimplifiedItem } from 'src/app/_models/pokemon.model';
import { PokemonService } from 'src/app/_services/pokemon.service';

@Component({
  selector: 'hcg-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
  @Input() vmItem$: Observable<SimplifiedItem>;
  @Input() id: number | string;

  vmPokemon$: Observable<SimplifiedItem>
  constructor(private pokeSvr: PokemonService) { }

  ngOnInit(): void {
    this.vmItem$ = this.pokeSvr.getItemDetail(this.id.toString());
  }
}
