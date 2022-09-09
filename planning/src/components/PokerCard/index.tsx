type PokerCardProps = {
  value: number;
  selected: boolean;
  onClick?: () => void;
};

const PokerCard = ({ value, selected, onClick }: PokerCardProps) => {
  return (
    <div
      className={`p-12 border border-gray-500 rounded cursor-pointer shadow-xl motion-safe:hover:scale-105 text-center ${
        selected ? "bg-purple-100 scale-105" : ""
      }`}
      onClick={() => onClick?.()}
    >
      <span
        className={`text-purple-${selected ? "500" : "300"} font-bold text-6xl`}
      >
        {value}
      </span>
    </div>
  );
};

export default PokerCard;
