"use server";

import { List } from "../types/types";

export const getPokemons = async (): Promise<List> => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = response.json();

  return data;
};

export const getInfoPokemons = async (id: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = response.json();

  return data;
};
