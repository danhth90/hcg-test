import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { PaginatedGeneration, Paginateditems, PaginatedLocation } from '../_models/generation.model';
import { PaginatedPokemon,Pokemon, PokemonDetail, SimplifiedPokemon } from '../_models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl = 'https://pokeapi.co/api/v2/';
  constructor(private http: HttpClient) { }

  getGenerations(): Observable<PaginatedGeneration>{
    return this.http.get<PaginatedGeneration>(`${this.baseUrl}generation`);
  }

  getLocations(): Observable<PaginatedLocation>{
    return this.http.get<PaginatedLocation>(`${this.baseUrl}location`);
  }

  getItems(): Observable<Paginateditems>{
    return this.http.get<Paginateditems>(`${this.baseUrl}item`);
  }

  getPokemons(limit = 20, offset = 0): Observable<PaginatedPokemon> {
    return this.http
      .get<PaginatedPokemon>(`${this.baseUrl}pokemon`, {
        params: { limit, offset }
      })
      .pipe(
        delay(1500),
        map((paginatedPokemon: PaginatedPokemon) => {
          return {
            ...paginatedPokemon,
            results: paginatedPokemon?.results.map(pokemon => ({
              ...pokemon,
              id: pokemon.url
                .split('/')
                .filter(Boolean)
                .pop()
            }))
          };
        })
      );
  }

  getPokemonDetail(id: string): Observable<SimplifiedPokemon> {
    return this.http
      .get(`${this.baseUrl}pokemon/${id}`)
      .pipe(
        delay(1500), 
        map((pokemon: PokemonDetail) => PokemonService.getSimplifiedPokemon(pokemon))
      );
  }

  private static getSimplifiedPokemon(pokemon: PokemonDetail | null): SimplifiedPokemon {
    return {
      name: pokemon?.name || '',
      ability: pokemon?.abilities?.find((ability) => !ability.is_hidden)?.ability?.name || '',
      hiddenAbility: pokemon?.abilities?.find((ability) => ability.is_hidden)?.ability?.name || '',
      image: pokemon?.sprites?.other?.['official-artwork']?.front_default || '',
      stats: pokemon?.stats || [],
      type: pokemon?.types[0].type?.name || ''
    }
  }
}
