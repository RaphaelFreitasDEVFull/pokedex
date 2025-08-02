import { randomUUID } from "crypto";
import { getInfoPokemons } from "../actions/pokemon";
import PokemonListClient from "./PokemonListClient";

type Props = {
  page?: number;
};

const PokemonList = async ({ page = 1 }: Props) => {
  const pageSize = 12;
  const totalPokemons = 1050;
  const totalPages = Math.ceil(totalPokemons / pageSize);

  const offset = (page - 1) * pageSize;
  const pokemonIds = Array.from({ length: pageSize }, (_, i) =>
    (offset + i + 1).toString()
  );

  const pokemons = await Promise.all(
    pokemonIds.map((id) => getInfoPokemons(id))
  );

  return (
    <PokemonListClient
      key={randomUUID()}
      pokemons={pokemons}
      currentPage={page}
      totalPages={totalPages}
    />
  );
};

export default PokemonList;
