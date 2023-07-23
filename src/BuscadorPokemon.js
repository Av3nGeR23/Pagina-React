import React, { useState } from 'react';
import PokemonInfo from './PokemonInfo';
import './BuscadorPokemon.css'; 

const BuscadorPokemon = () => {
  const [pokemonName, setPokemonName] = useState('');

  const handleInputChange = (event) => {
    setPokemonName(event.target.value);
  };

  return (
    <div className="buscador-container">
      <h1 className="title">INGRESA UN NOMBRE DE POKEMON</h1>
      <input type="text" value={pokemonName} onChange={handleInputChange} style={{ width: '300px', margin: '10px' }} />
      <PokemonInfo pokemonName={pokemonName} />
    </div>
  );
};

export default BuscadorPokemon;
