import PageTitle from "@components/PageTitle";
import PokerCard from "@components/PokerCard";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";

const Room: NextPage = () => {
  const router = useRouter();
  const roomId = router.query.id as string;
  const room = trpc.useQuery(["room.getById", { id: roomId }]);

  return (
    <>
      <PageTitle title="Room" highlighted={room.data?.name} />
      <PokerCard value={7} />
    </>
  );
};

export default Room;
