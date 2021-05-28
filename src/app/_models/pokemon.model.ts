export interface Pokemon {
  name: string;
  url: string;
  id?: string;
}

export interface PaginatedPokemon {
  count: number;
  next: string;
  previous: string;
  results: SimplifiedPokemon[];
}

export interface PokemonDetail {
  abilities: Ability[];
  base_experience: number;
  forms: Species[];
  game_indices: GameIndex[];
  height: number;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

export interface Ability {
  ability: Species;
  is_hidden: boolean;
  slot: number;
}

export interface Species {
  name: string;
  url: string;
}

export interface GameIndex {
  game_index: number;
  version: Species;
}

export interface Move {
  move: Species;
  version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: Species;
  version_group: Species;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: Species;
}

export interface Type {
  slot: number;
  type: Species;
}

export interface Sprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other?: Other;
  // versions?: Versions;
  animated?: Sprites;
  default?: string;
}

export interface Other {
  // dream_world: DreamWorld;
  'official-artwork': OfficialArtwork;
}

export interface OfficialArtwork {
  front_default: string;
}

export interface SimplifiedPokemon {
  name: string;
  url?: string;
  ability: string;
  hiddenAbility: string;
  image: string;
  stats: Stat[];
  type: string;
  id?: number | string;
}

export interface SimplifiedItem {
  name: string;
  url?: string;
  image: string;
  id?: number | string;
}


export interface ItemDetail {
  name: string;
  url?: string;
  image: string;
  id?: number | string;
  sprites: Sprites;
}


export interface Paginateditems{
  count: number;
  next: string;
  previous: string;
  results: SimplifiedItem[];
}