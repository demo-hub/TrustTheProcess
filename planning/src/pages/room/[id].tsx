import PageTitle from "@components/PageTitle";
import PokerCard from "@components/PokerCard";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { trpc } from "../../utils/trpc";

const FIBONACCI_SEQUENCE = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

const Room: NextPage = () => {
  const router = useRouter();
  const roomId = router.query.id as string;
  const room = trpc.useQuery(["room.getById", { id: roomId }]);
  const allRoomSessions = trpc.useQuery([
    "session.getRoomSessions",
    { roomId },
  ]);
  const startSessionMutation = trpc.useMutation(["user.startSession"]);

  const userSession = useMemo(() => {
    if (startSessionMutation.data && !startSessionMutation.error) {
      sessionStorage.setItem("user", startSessionMutation.data.userId ?? "");
      return startSessionMutation.data;
    }

    return undefined;
  }, [startSessionMutation.data, startSessionMutation.error]);

  useEffect(() => {
    const userId = sessionStorage.getItem("user");

    if (!userSession && !startSessionMutation.isLoading)
      startSessionMutation.mutate({ id: userId, roomId });
  });

  const [selected, setSelected] = useState(0);

  return (
    <>
      <PageTitle title="Room" highlighted={room.data?.name} />
      <div className="grid grid-cols-4 gap-8 justify-center">
        {FIBONACCI_SEQUENCE.map((value) => (
          <PokerCard
            key={value}
            value={value}
            selected={selected === value}
            onClick={() => setSelected(value)}
          />
        ))}
      </div>
      <p>Logged in: {userSession?.userId}</p>
      <div>
        {allRoomSessions.data?.map((session) => (
          <p key={session.id}>Session: {session.userId}</p>
        ))}
      </div>
    </>
  );
};

export default Room;
