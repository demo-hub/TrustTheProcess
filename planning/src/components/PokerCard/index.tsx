import { faCheck, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as styles from "./styles.css";

type PokerCardProps = {
  value: number | string;
  selected: boolean;
  selectable?: boolean;
  onClick?: () => void;
  loading?: boolean;
  ready?: boolean;
  opaque?: boolean;
};

const PokerCard = ({
  value,
  selected,
  onClick,
  loading,
  ready,
  selectable = true,
  opaque = false,
}: PokerCardProps) => {
  return (
    <div
      className={`${styles.container} ${selectable ? styles.selectable : ""} ${
        selected ? styles.selected : ""
      } ${opaque ? styles.opaque : ""}`}
      onClick={() => onClick?.()}
    >
      <span
        className={`${selected ? styles.selectedText : styles.text} ${
          styles.textSize
        }`}
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
