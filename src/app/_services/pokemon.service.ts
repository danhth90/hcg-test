import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginatedGeneration } from '../_models/generation.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl = 'https://pokeapi.co/api/v2/';
  constructor(private http: HttpClient) { }

  getGenerations(): Observable<PaginatedGeneration>{
    return this.http.get<PaginatedGeneration>(`${this.baseUrl}generation`)
  }
}
