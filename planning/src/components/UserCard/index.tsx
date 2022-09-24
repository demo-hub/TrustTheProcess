import PokerCard from "@components/PokerCard";
import Image from "next/image";

type CardProps = {
  name: string;
  voting?: boolean;
  vote?: number;
};

const UserCard = ({ name, voting, vote }: CardProps) => {
  return (
    <div className="flex flex-col gap-2 justify-center p-4 duration-500 border-2 border-gray-500 rounded">
      <Image alt="" src="/user_image.png" width="180" height="200" />
      <h2 className="text-lg text-gray-700">{name}</h2>
      <PokerCard
        loading={voting}
        ready={!voting}
        value={vote ?? 0}
        selected={false}
        selectable={false}
      />
    </div>
  );
};

export default UserCard;
