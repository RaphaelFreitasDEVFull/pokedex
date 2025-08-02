import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <main className="text-black w-full max-w-[1400px] mx-auto flex items-center justify-between p-4">
      <div className="mt-[80px] flex flex-col w-full max-w-[650px]">
        <h1 className=" h-[250px]">
          <span className="font-bold">Encontre</span> os seus{" "}
          <span className="font-bold">Pokemon</span> favoritos
        </h1>
        <h2 className="mb-16">
          Você pode saber o tipo de Pokémon, seus pontos fortes, desvantagens e
          habilidades
        </h2>
        <Link
          href={"#"}
          className="bg-[#73D677] w-fit px-9 py-8 rounded-[12px] shadow-button font-bold"
        >
          Veja todos
        </Link>
        <h3 className="mt-[60px] font-bold">
          Desenvolvido com ❤ por Raphael Silva Freitas - RSFDEV
        </h3>
      </div>
      <Image
        src={"/images/banner.png"}
        width={600}
        height={400}
        alt="banner"
        className="absolute right-0 top-25"
      />
    </main>
  );
};

export default Home;
