import React, { useEffect, useState } from 'react';

const PokemonInfo = ({ pokemonName }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    if (pokemonName) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
        .then((response) => response.json())
        .then((data) => setPokemonData(data))
        .catch((error) => console.error('Error fetching data:', error));
    }
  }, [pokemonName]);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
    <h1 className="pokemon-name">{pokemonData.name}</h1>
    <img src={pokemonData.sprites.front_default} alt={pokemonData.name} width={350}/>
    <p className="pokemon-detail">Weight: {pokemonData.weight}</p>
    <p className="pokemon-detail">Height: {pokemonData.height}</p>
    {/* Agrega más detalles del Pokémon según necesites */}
  </div>
  );
};

export default PokemonInfo;
