import { Component, OnInit, TRANSLATIONS } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PaginatedGeneration } from 'src/app/_models/generation.model';
import { PokemonService } from 'src/app/_services/pokemon.service';

@Component({
  selector: 'hcg-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  
  vm$: Observable<PaginatedGeneration>;
  
  constructor(private pokeSvr: PokemonService) { 
    this.vm$ = this.pokeSvr.getGenerations();
  }

  ngOnInit() {
  }
}
