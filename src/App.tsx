import { PokemonCardList } from "./components/PokemonCardList";
import { useState } from "react";
import './App.css';
import type { PokemonType, Captured } from "./utils/types";

const App = () => {
  const [selectedType, setSelectedType] = useState<PokemonType>(undefined);
  const [capturedFilter, setCapturedFilter] = useState<Captured>(undefined);

  return (
    <div>
      <img className="pokemons-logo"
        src="assets/image.png" alt="Pokemons" 
      />
      <div className="filters">
        <span>
          <select value={selectedType} onChange={e => setSelectedType(e.target.value as PokemonType)}>
            <option value="">Any</option>
            <option value="Grass">Grass</option>
            <option value="Fire">Fire</option>
            <option value="Water">Water</option>
            <option value="Electric">Electric</option>
            <option value="Psychic">Psychic</option>
            <option value="Ice">Ice</option>
            <option value="Dragon">Dragon</option>
            <option value="Dark">Dark</option>
            <option value="Fairy">Fairy</option>
          </select>
        </span>
        <span>
          <select value={capturedFilter} onChange={e => setCapturedFilter(e.target.value as Captured)}>
            <option value="">Any</option>
            <option value="Captured">Captured</option>
            <option value="Not Captured">Not Captured</option>
          </select>
        </span>
      </div>
      <div className="pokCards">
        <PokemonCardList
          selectedType={selectedType}
          capturedFilter={capturedFilter}
        />
      </div>
    </div>
  )
}

export default App