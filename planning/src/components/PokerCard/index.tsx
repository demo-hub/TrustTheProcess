import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type PokerCardProps = {
  value: number;
  selected: boolean;
  onClick?: () => void;
  loading?: boolean;
};

const PokerCard = ({ value, selected, onClick, loading }: PokerCardProps) => {
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
        {loading ? (
          <FontAwesomeIcon icon={faSpinner} spin width={64} height={64} />
        ) : (
          value
        )}
      </span>
    </div>
  );
};

export default PokerCard;
