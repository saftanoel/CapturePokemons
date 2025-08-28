export type Captured = "Captured" | "Not Captured" | undefined;

export type PokemonType =
undefined 
  | "Normal"
  | "Fire"
  | "Water"
  | "Grass"
  | "Electric"
  | "Ice"
  | "Fighting"
  | "Poison"
  | "Ground"
  | "Flying"
  | "Psychic"
  | "Bug"
  | "Rock"
  | "Ghost"
  | "Dragon"
  | "Dark"
  | "Steel"
  | "Fairy";
export type Evolution = {
  num: string;
  name: string;
};

export type Pokemon = {
  id: number;
  num: string;
  name: string;
  img: string;
  type: PokemonType[];
  height?: string;
  weight?: string;
  candy?: string;
  candy_count?: number;
  egg?: string;
  spawn_chance: number;
  avg_spawns: number;
  spawn_time?: string;
  multipliers?: number[] | null;
  weaknesses: PokemonType[];
  prev_evolution?: Evolution[];
  next_evolution?: Evolution[];
  captured: boolean;
};

export type PokemonDictionary = {
  pokemon: Pokemon[];
};