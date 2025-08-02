import Image from "next/image";
import BadgeType from "./badgeType";

type Props = {
  name: string;
  attack: number;
  defense: number;
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  imageUrl: string;
};

const PokeCard = ({ name, attack, defense, imageUrl, types }: Props) => {
  return (
    <div className="w-full max-w-[350px]  bg-gray-200 p-6 h-fit rounded-2xl flex items-centerjustify-between hover:scale-105 cursor-pointer drop-shadow-nav">
      <div className="flex flex-col gap-3 items-center">
        <h3 className="capitalize font-bold">{name}</h3>
        <div className="flex gap-4">
          <div className="flex flex-col gap-1">
            <span className="w-9 h-9 rounded-full border border-black p-4 flex items-center justify-center text-base">
              {attack}
            </span>
            <span>Ataque</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="w-9 h-9 rounded-full border border-black p-4 flex items-center justify-center text-base">
              {defense}
            </span>
            <span>Defesa</span>
          </div>
        </div>
        <div className="flex gap-4">
          {types.map((type) => (
            <BadgeType type={type.type.name} key={type.type.name} />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-end w-full">
        <Image src={imageUrl} width={150} height={150} alt={name} />
      </div>
    </div>
  );
};

export default PokeCard;
