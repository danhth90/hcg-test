import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginatedGeneration, PaginatedLocation } from 'src/app/_models/generation.model';
import { Paginateditems } from 'src/app/_models/pokemon.model';
import { PokemonService } from 'src/app/_services/pokemon.service';

@Component({
  selector: 'hcg-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  
  vmGeneration$: Observable<PaginatedGeneration>;
  vmLocation$: Observable<PaginatedLocation>;
  vmItem$: Observable<Paginateditems>;
  
  constructor(private pokeSvr: PokemonService) { 
    this.vmGeneration$ = this.pokeSvr.getGenerations();
    this.vmLocation$ = this.pokeSvr.getLocations();
    this.vmItem$ = this.pokeSvr.getItems();
  }

  ngOnInit() {
  }
}
