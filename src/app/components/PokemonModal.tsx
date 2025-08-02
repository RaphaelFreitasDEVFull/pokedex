"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import BadgeType from "./badgeType";
import SpriteBox from "./spriteBox";

type PokemonModalProps = {
  isOpen: boolean;
  onClose: () => void;
  pokemon: any;
};

export const PokemonModal = ({
  isOpen,
  onClose,
  pokemon,
}: PokemonModalProps) => {
  if (!pokemon) return null;

  console.log(pokemon.abili);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full min-w-[80%] min-h-[80%] flex flex-col ">
        <DialogHeader>
          <DialogTitle className="capitalize">{pokemon.name}</DialogTitle>
          <DialogDescription>Informações adicionais:</DialogDescription>
        </DialogHeader>
        <div className="flex gap-2 text-sm ">
          <div className="w-full max-w-1/2 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h5>Experiencia Base</h5>
              <Progress
                value={pokemon.base_experience}
                max={500}
                className="w-1/2"
              />
              <span className="text-base ">{pokemon.base_experience}</span>
            </div>
            <div className="flex gap-6">
              {pokemon.types.map(
                (typex: {
                  slot: number;
                  type: {
                    name: string;
                    url: string;
                  };
                }) => (
                  <BadgeType type={typex.type.name} key={typex.type.name} />
                )
              )}
            </div>
            <div className="flex gap-4">
              <div className="flex gap-2 items-center justify-center text-base">
                <span className="font-bold text-base ">Altura:</span>
                {pokemon.height / 10} m
              </div>
              <div className="flex gap-2 items-center justify-center text-base">
                <span className="font-bold text-base ">Peso:</span>
                {pokemon.weight / 10} kg
              </div>
            </div>
            <div>
              <h3 className="font-bold">Som do Pokemon</h3>
              <audio
                controls
                src={pokemon.cries.latest}
                className="w-full max-w-sm rounded-xl border border-gray-300 bg-white shadow-md dark:bg-zinc-900 dark:border-zinc-700"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold">Habilidades</h3>
              <div className="flex gap-4">
                {pokemon.abilities.map((ability: any) => (
                  <span className="capitalize text-[18px] font-light">
                    {ability.ability.name.replace(/-/g, " ")}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full border border-black/40 rounded-4xl px-4 py-6 flex flex-col gap-2 bg-indigo-300/10">
              <div className="grid grid-cols-3 gap-3">
                <div className="border border-black/30 w-full items-center justify-center rounded-3xl p-2 flex flex-col gap-2 bg-[#fff]">
                  <span className="font-bold text-center">HP</span>
                  <span>{pokemon.stats[0].base_stat}</span>
                </div>
                <div className="border border-black/30 w-full items-center justify-center rounded-3xl p-2 flex flex-col gap-2 bg-[#fff]">
                  <span className="font-bold text-center">Ataque</span>
                  <span>{pokemon.stats[1].base_stat}</span>
                </div>
                <div className="border border-black/30 w-full items-center justify-center rounded-3xl p-2 flex flex-col gap-2 bg-[#fff]">
                  <span className="font-bold text-center">Defesa</span>
                  <span>{pokemon.stats[2].base_stat}</span>
                </div>
                <div className="border border-black/30 w-full items-center justify-center rounded-3xl p-2 flex flex-col gap-2 bg-[#fff]">
                  <span className="font-bold text-center">Ataque Especial</span>
                  <span>{pokemon.stats[3].base_stat}</span>
                </div>
                <div className="border border-black/30 w-full items-center justify-center rounded-3xl p-2 flex flex-col gap-2 bg-[#fff]">
                  <span className="font-bold text-center">Defesa Especial</span>
                  <span>{pokemon.stats[4].base_stat}</span>
                </div>
                <div className="border border-black/30 w-full items-center justify-center rounded-3xl p-2 flex flex-col gap-2 bg-[#fff]">
                  <span className="font-bold text-center">HP</span>
                  <span>{pokemon.stats[5].base_stat}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <SpriteBox name="Costas" url={pokemon.sprites.back_default} />
            <SpriteBox name="Frente" url={pokemon.sprites.front_default} />

            <SpriteBox name="Costas Shiny" url={pokemon.sprites.back_shiny} />
            <SpriteBox name="Frente Shiny" url={pokemon.sprites.front_shiny} />
            <SpriteBox name="Costas Fêmea" url={pokemon.sprites.back_female} />
            <SpriteBox name="Frente Fêmea" url={pokemon.sprites.front_female} />
            <SpriteBox
              name="Frente Shiny Fêmea"
              url={pokemon.sprites.back_shiny_female}
            />
            <SpriteBox
              name="Costas Shiny Fêmea"
              url={pokemon.sprites.front_shiny_female}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
