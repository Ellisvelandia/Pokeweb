import React from "react";

const CardsPokemon = ({ pokemons }) => {
  return (
    <>
      {pokemons.map((pokemon) => {
        const id = pokemon.url.split("/")[6];
        const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        return (
          <div
            className="grid place-items-center my-2 p-4 shadow w-80"
            key={pokemon.name}
          >
            <h2 className="text-center">{pokemon.name}</h2>
            <img
              src={spriteUrl}
              alt={pokemon.name}
              className="w-40 object-fill"
            />
          </div>
        );
      })}
    </>
  );
};

export default CardsPokemon;
