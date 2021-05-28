import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { PaginatedGeneration, PaginatedLocation } from '../_models/generation.model';
import { PaginatedPokemon,SimplifiedItem, PokemonDetail, SimplifiedPokemon, ItemDetail, Paginateditems } from '../_models/pokemon.model';

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

  getItems(limit = 20, offset = 0): Observable<Paginateditems>{
    return this.http.get<Paginateditems>(`${this.baseUrl}item`, {
      params: { limit, offset }
    }).pipe(
      delay(1500),
      map((paginatedItem: Paginateditems) => {
        return {
          ...paginatedItem,
          results: paginatedItem?.results.map(item => ({
            ...item,
            id: item.url
              .split('/')
              .filter(Boolean)
              .pop()
          }))
        };
      })
    );
  }

  getItemDetail(id: string): Observable<SimplifiedItem> {
    return this.http
      .get(`${this.baseUrl}item/${id}`)
      .pipe(
        delay(1500), 
        map((item: ItemDetail) => PokemonService.getSimplified(item))
      );
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

  private static getSimplified(item: ItemDetail | null): SimplifiedItem {
    return {
      name: item?.name || '',
      image: item?.sprites?.default || ''
    }
  }
}
