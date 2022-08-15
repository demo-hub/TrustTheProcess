import type { NextPage } from "next";
import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";

const Room: NextPage = () => {
  const router = useRouter();
  const roomId = router.query.id as string;
  const room = trpc.useQuery(["room.getById", { id: roomId }]);

  return (
    <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
      Room <span className="text-purple-300">{room.data?.name}</span>
    </h1>
  );
};

export default Room;
