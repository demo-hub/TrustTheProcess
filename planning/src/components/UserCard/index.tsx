import PokerCard from "@components/PokerCard";
import Image from "next/image";
import { container, role } from "./styles.css";

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
    <div className={container}>
      <h2 className={name}>{name}</h2>
      <Image alt="" src="/user_image.png" width="180" height="160" />
      <h2 className={role}>{moderator ? "Moderator" : "Member"}</h2>
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
