import axios from "axios";
import React, { useEffect, useState } from "react";
import CardsPokemon from "../components/CardsPokemon";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`
      );
      setPokemons(response.data.results);
    };
    fetchPokemons();
  }, []);

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 w-full h-full my-8 p-8 place-items-center ">
      <CardsPokemon pokemons={pokemons} />
    </div>
  );
};

export default PokemonList;
