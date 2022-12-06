import { faSpinner, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { button } from "./styles.css";

type ButtonProps = {
  type: "primary" | "danger" | "icon" | "no-fill";
  icon?: IconDefinition;
  label?: string;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
};

const Button = ({
  type,
  icon,
  label,
  onClick,
  loading,
  disabled,
}: ButtonProps) => {
  return (
    <button
      className={button({ type })}
      onClick={() => onClick?.()}
      disabled={loading || disabled}
    >
      {(type === "icon" && icon) || icon ? (
        <FontAwesomeIcon
          icon={icon}
          style={{ paddingRight: "0.3rem" }}
          height={16}
          width={16}
        />
      ) : undefined}
      {loading ? (
        <FontAwesomeIcon
          icon={faSpinner}
          spin
          style={{ paddingRight: "0.3rem" }}
          height={16}
          width={16}
        />
      ) : undefined}
      {type !== "icon" ? label : undefined}
    </button>
  );
};

export default Button;
