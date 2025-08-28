import { useEffect, useState } from "react";
import { PokemonCard } from "./PokemonCard";
import type { Pokemon, PokemonType } from "../utils/types";
import "./PokemonCardList.css"

type PokemonCardListProps = {
  selectedType?: PokemonType;
  capturedFilter?: "Captured" | "Not Captured";
};

export const PokemonCardList = ({ selectedType, capturedFilter }: PokemonCardListProps) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPokemons() {
      try {
        const res = await fetch("assets/og-pokemon.json");
        const json = await res.json();
        setPokemons(json.pokemon.map((p: Pokemon) => ({ ...p, captured: false })));
        setLoading(false);
      } catch (e) {
        console.error("Failed to fetch pokemons:", e);
        setLoading(false);
      }
    }
    fetchPokemons();
  }, []);
  
  const handleToggleCaptured = (id: number) => {
    setPokemons(prev =>
      prev.map(p =>
        p.id === id ? { ...p, captured: !p.captured } : p
      )
    );
  };

  if (loading) return <div>Loading...</div>;

  const filteredPokemons = pokemons.filter((pokemon) => {
    const matchesType =
      !selectedType || pokemon.type.includes(selectedType);
    const matchesCaptured =
      !capturedFilter ||
      (capturedFilter === "Captured" && pokemon.captured) ||
      (capturedFilter === "Not Captured" && !pokemon.captured);
    return matchesType && matchesCaptured;
  });

  return (
    <div className="pokemon-list">
      {filteredPokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onToggleCaptured={() => handleToggleCaptured(pokemon.id)}
        />
      ))}
    </div>
  );
}