type CardProps = {
  name: string;
  description: string;
  unavailable?: boolean;
};

const Card = ({ name, description, unavailable = false }: CardProps) => {
  return (
    <div
      className={`flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded ${
        !unavailable
          ? "cursor-pointer shadow-xl motion-safe:hover:scale-105"
          : "bg-purple-100"
      }`}
    >
      <h2 className="text-lg text-gray-700">
        {name}{" "}
        {unavailable ? (
          <span className="italic text-purple-500">Coming Soon</span>
        ) : null}
      </h2>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
