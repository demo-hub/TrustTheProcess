import PageTitle from "@components/PageTitle";
import PokerCard from "@components/PokerCard";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";

const FIBONACCI_SEQUENCE = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

const Room: NextPage = () => {
  const router = useRouter();
  const roomId = router.query.id as string;
  const room = trpc.useQuery(["room.getById", { id: roomId }]);

  return (
    <>
      <PageTitle title="Room" highlighted={room.data?.name} />
      <div className="grid grid-cols-4 gap-8 justify-center">
        {FIBONACCI_SEQUENCE.map((value) => (
          <PokerCard key={value} value={value} />
        ))}
      </div>
    </>
  );
};

export default Room;
