import { faSpinner, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  let backgroundColor = "";
  let textColor = "";
  let textSize = "";
  let padding = "";

  switch (type) {
    case "primary":
      backgroundColor = "bg-purple-300";
      textColor = "text-white";
      textSize = "text-lg";
      padding = "py-1.5 px-2.5";
      break;
    case "danger":
      backgroundColor = "bg-red-300";
      textColor = "text-white";
      textSize = "text-lg";
      padding = "py-1.5 px-2.5";
      break;
    case "icon":
      backgroundColor = "bg-transparent";
      textColor = "text-gray-800";
      textSize = "text-xl";
      padding = "py-1.5 px-2.5";
      break;
    case "no-fill":
      backgroundColor = "bg-transparent";
      textColor = "text-purple-300";
      textSize = "text-lg";
      padding = "px-2.5";
      break;
    default:
      break;
  }

  return (
    <button
      className={`${backgroundColor} ${textSize} font-bold ${textColor} ${padding} rounded inline-flex items-center`}
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
        />
      ) : undefined}
      {type !== "icon" ? label : undefined}
    </button>
  );
};

export default Button;
