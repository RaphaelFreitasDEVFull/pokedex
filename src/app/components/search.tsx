import { getPokemons } from "../actions/pokemon";

const Search = async () => {
  const count = await getPokemons();
  return (
    <div
      className="w-full flex items-center flex-col gap-5
        "
    >
      <span className="text-[45px] w-full text-center mt-12">
        {count.count} Pokemon para você escolher
      </span>
      <input
        type="text"
        placeholder="Encontre seu pokemon..."
        className="w-full max-w-[1000px] mx-auto bg-[#F2F2F2] px-6 py-4 rounded-[40px] outline-none drop-shadow-nav "
      />
    </div>
  );
};

export default Search;
