import clsx from "clsx";

type Props = {
  type: string;
};

const BadgeType = ({ type }: Props) => {
  return (
    <div
      className={clsx(
        `bg-[var(--color-${type})]`,
        "text-black px-2 py-1 rounded-2xl capitalize font-bold"
      )}
    >
      {type}
    </div>
  );
};

export default BadgeType;
