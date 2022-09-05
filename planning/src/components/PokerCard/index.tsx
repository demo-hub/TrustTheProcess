import { useState } from "react";

type PokerCardProps = {
  value: number;
};

const PokerCard = ({ value }: PokerCardProps) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      className={`p-6 border border-gray-500 rounded cursor-pointer shadow-xl motion-safe:hover:scale-105 text-center ${
        isSelected ? "bg-purple-100 scale-105" : ""
      }`}
      onClick={() => setIsSelected((prev) => !prev)}
    >
      <span
        className={`text-purple-${
          isSelected ? "500" : "300"
        } font-bold text-2xl`}
      >
        {value}
      </span>
    </div>
  );
};

export default PokerCard;
