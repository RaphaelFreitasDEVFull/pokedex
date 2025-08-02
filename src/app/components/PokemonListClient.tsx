"use client";

import Link from "next/link";
import { PokemonModal } from "./PokemonModal";
import PokeCard from "./pokemonCard";
import { useState } from "react";

// Receba também o número da página atual e total de páginas
type Props = {
  pokemons: any[];
  currentPage: number;
  totalPages: number;
};

const PokemonListClient = ({ pokemons, currentPage, totalPages }: Props) => {
  const [selectedPokemon, setSelectedPokemon] = useState<any>(null);

  const openModal = (pokemon: any) => setSelectedPokemon(pokemon);
  const closeModal = () => setSelectedPokemon(null);

  return (
    <>
      <div className="grid grid-cols-4 mt-16 gap-8 justify-center">
        {pokemons.map((pokemon) => {
          const attack =
            pokemon.stats[1].base_stat + pokemon.stats[3].base_stat;
          const defense =
            pokemon.stats[2].base_stat + pokemon.stats[4].base_stat;

          return (
            <div
              key={pokemon.id}
              onClick={() => openModal(pokemon)}
              className="cursor-pointer"
            >
              <PokeCard
                name={pokemon.name}
                imageUrl={
                  pokemon.sprites.other["official-artwork"].front_default
                }
                attack={attack}
                defense={defense}
                types={pokemon.types}
              />
            </div>
          );
        })}
      </div>

      <div className="flex justify-center gap-4 mt-8">
        {currentPage > 1 && (
          <Link
            href={`?page=${currentPage - 1}`}
            className="px-4 py-2 bg-gray-200 rounded"
          >
            Anterior
          </Link>
        )}
        {currentPage < totalPages && (
          <Link
            href={`?page=${currentPage + 1}`}
            className="px-4 py-2 bg-gray-200 rounded"
          >
            Próxima
          </Link>
        )}
      </div>

      <PokemonModal
        isOpen={!!selectedPokemon}
        onClose={closeModal}
        pokemon={selectedPokemon}
      />
    </>
  );
};

export default PokemonListClient;
