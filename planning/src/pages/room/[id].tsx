import PageTitle from "@components/PageTitle";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";

const Room: NextPage = () => {
  const router = useRouter();
  const roomId = router.query.id as string;
  const room = trpc.useQuery(["room.getById", { id: roomId }]);

  return <PageTitle title="Room" highlighted={room.data?.name} />;
};

export default Room;
