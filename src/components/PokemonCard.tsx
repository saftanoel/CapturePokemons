import type { Pokemon } from "../utils/types";
import Switch from "@mui/material/Switch";
import "./PokemonCard.css"
type PokemonCardProps = {
  pokemon: Pokemon;
  onToggleCaptured: () => void;
};

export const PokemonCard = ({ pokemon, onToggleCaptured }: PokemonCardProps) => {
  return (
    <div className="pokemon-card">
      <h4>{pokemon.id}</h4>
      <img src={pokemon.img} alt={pokemon.name} style={{ border: "black" }} />
      <h2>{pokemon.name}</h2>
      <h4>{pokemon.type.join(", ")}</h4>
      <div className="bottom-container">
        <Switch checked={pokemon.captured} onChange={onToggleCaptured} />
        <span className="captured-label">
          Captured
        </span>
      </div>
    </div>
  );
};