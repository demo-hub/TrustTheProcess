import {
  availableCard,
  cardDescription,
  cardName,
  comingSoon,
  container,
  unavailableCard,
} from "./styles.css";

type CardProps = {
  name: string;
  description: string;
  unavailable?: boolean;
};

const Card = ({ name, description, unavailable = false }: CardProps) => {
  return (
    <div
      className={`${container} ${
        !unavailable ? unavailableCard : availableCard
      }`}
    >
      <h2 className={cardName}>
        {name}{" "}
        {unavailable ? <span className={comingSoon}>Coming Soon</span> : null}
      </h2>
      <p className={cardDescription}>{description}</p>
    </div>
  );
};

export default Card;
