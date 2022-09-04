type PokerCardProps = {
  value: number;
};

const PokerCard = ({ value }: PokerCardProps) => {
  return (
    <div className="p-6 border border-gray-500 rounded cursor-pointer shadow-xl motion-safe:hover:scale-105">
      <span className="text-purple-300 font-bold text-2xl">{value}</span>
    </div>
  );
};

export default PokerCard;
