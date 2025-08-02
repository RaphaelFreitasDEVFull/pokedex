import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-thirdy h-[90px] flex items-center drop-shadow-nav">
      <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between p-4">
        <Image src={"/images/logo.png"} width={160} height={60} alt="Logo" />
        <nav className="flex items-center gap-[60px] mr-[150px]">
          <Link
            href={"#"}
            className="text-[25px] py-2 text-black hover:border-b-[3px] hover:border-black transition-all duration-300 ease-in"
          >
            Home
          </Link>
          <Link
            href={"/pokedex"}
            className="text-[25px] py-2 text-black hover:border-b-[3px] hover:border-black transition-all duration-300 ease-in"
          >
            Pokedex
          </Link>
          <Link
            href={"#"}
            className="text-[25px] py-2 text-black hover:border-b-[3px] hover:border-black transition-all duration-300 ease-in"
          >
            Lendarios
          </Link>
          <Link
            href={"#"}
            className="text-[25px] py-2 text-black hover:border-b-[3px] hover:border-black transition-all duration-300 ease-in"
          >
            Documentação
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
