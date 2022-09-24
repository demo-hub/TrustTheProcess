import { faCheck, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type PokerCardProps = {
  value: number;
  selected: boolean;
  selectable?: boolean;
  onClick?: () => void;
  loading?: boolean;
  ready?: boolean;
};

const PokerCard = ({
  value,
  selected,
  onClick,
  loading,
  ready,
  selectable = true,
}: PokerCardProps) => {
  return (
    <div
      className={`p-12 border border-gray-500 rounded ${
        selectable ? "cursor-pointer motion-safe:hover:scale-105" : ""
      } shadow-xl text-center ${selected ? "bg-purple-100 scale-105" : ""}`}
      onClick={() => onClick?.()}
    >
      <span
        className={`text-purple-${selected ? "500" : "300"} font-bold text-6xl`}
      >
        {loading || ready ? (
          <div className="text-sm">
            <FontAwesomeIcon
              icon={ready ? faCheck : faSpinner}
              spin
              width={32}
              height={32}
              style={{ display: "inline" }}
            />
            <p>{ready ? "Voted" : "Voting"}</p>
          </div>
        ) : undefined}
        {!loading ? value : undefined}
      </span>
    </div>
  );
};

export default PokerCard;
