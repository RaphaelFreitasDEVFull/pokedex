import PokemonList from "@/app/components/pokemonList";
import Search from "@/app/components/search";

type PokedexProps = {
  searchParams: {
    page?: string;
  };
};

const Pokedex = async ({ searchParams }: PokedexProps) => {
  const currentPage = parseInt(searchParams.page ?? "1");

  return (
    <section className="w-full h-fit text-[#000000] bg-white">
      <div className="w-full max-w-[1400px] items-center justify-center mx-auto">
        <Search />
        <PokemonList page={currentPage} />
      </div>
    </section>
  );
};

export default Pokedex;
