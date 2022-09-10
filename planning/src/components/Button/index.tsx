import { faSpinner, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ButtonProps = {
  type: "primary" | "danger" | "icon";
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
  let backgroundColor = "";
  let textColor = "";
  let textSize = "";

  switch (type) {
    case "primary":
      backgroundColor = "bg-purple-300";
      textColor = "text-white";
      textSize = "text-lg";
      break;
    case "danger":
      backgroundColor = "bg-red-300";
      textColor = "text-white";
      textSize = "text-lg";
      break;
    case "icon":
      backgroundColor = "bg-transparent";
      textColor = "text-gray-800";
      textSize = "text-xl";
      break;
    default:
      break;
  }

  return (
    <button
      className={`${backgroundColor} ${textSize} font-bold ${textColor} py-1.5 px-2.5 rounded`}
      onClick={() => onClick?.()}
      disabled={loading || disabled}
    >
      {type === "icon" && icon ? <FontAwesomeIcon icon={icon} /> : undefined}
      {loading ? (
        <FontAwesomeIcon
          icon={faSpinner}
          spin
          style={{ paddingRight: "0.3rem" }}
        />
      ) : undefined}
      {type !== "icon" ? label : undefined}
    </button>
  );
};

export default Button;
