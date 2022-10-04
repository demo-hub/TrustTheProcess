import PokerCard from "@components/PokerCard";
import Image from "next/image";

type CardProps = {
  name: string;
  voting?: boolean;
  vote?: number | string;
  disableLoading?: boolean;
  moderator?: boolean;
};

const UserCard = ({
  name,
  voting,
  vote,
  disableLoading,
  moderator,
}: CardProps) => {
  return (
    <div className="flex flex-col gap-2 justify-center p-4 duration-500 border-2 border-gray-500 rounded text-center">
      <h2 className="text-2xl text-purple-300 font-bold">{name}</h2>
      <Image alt="" src="/user_image.png" width="180" height="160" />
      <h2 className="text-lg text-gray-700">
        {moderator ? "Moderator" : "Member"}
      </h2>
      <PokerCard
        loading={voting}
        ready={disableLoading ? false : !voting}
        value={vote ?? ""}
        selected={false}
        selectable={false}
      />
    </div>
  );
};

export default UserCard;
