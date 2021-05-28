import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PaginatedPokemon } from 'src/app/_models/pokemon.model';
import { PokemonService } from 'src/app/_services/pokemon.service';

@Component({
  selector: 'hcg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  arrTrailer = [
    "https://www.youtube.com/embed/D0zYJ1RQ-fs?autoplay=1&mute=1",
    "https://www.youtube.com/embed/D0zYJ1RQ-fs",
    "https://www.youtube.com/embed/D0zYJ1RQ-fs",
    "https://www.youtube.com/embed/D0zYJ1RQ-fs"
  ];

  heigthContent: number = 400;
  widthContent:number = window.innerWidth - 20;
  vmPokemon$ : Observable<PaginatedPokemon>;
  constructor(private pokeSvr: PokemonService) { }

  ngOnInit(): void {
    this.vmPokemon$ = this.pokeSvr.getPokemons(10);
  }

  ngAfterViewInit(){
    this.heigthContent = window.innerHeight - 120;
  }

}
