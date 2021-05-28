import { Component, OnInit, TRANSLATIONS } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PaginatedGeneration, Paginateditems, PaginatedLocation } from 'src/app/_models/generation.model';
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
