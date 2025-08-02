import Image from "next/image";

type Props = {
  name: string;
  url: string | null;
};

const SpriteBox = ({ name, url }: Props) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center border border-black/50 rounded-3xl p-6">
      <Image
        src={url ?? "/images/inf.png"}
        width={400}
        height={400}
        alt={name}
      />
      <span className="text-base text-center">{name}</span>
    </div>
  );
};

export default SpriteBox;
