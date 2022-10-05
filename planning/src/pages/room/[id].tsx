import Button from "@components/Button";
import PageTitle from "@components/PageTitle";
import PokerCard from "@components/PokerCard";
import UserCard from "@components/UserCard";
import removeDuplicates from "@utils/removeDuplicatesFromArray";
import { trpc } from "@utils/trpc";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";

const FIBONACCI_SEQUENCE = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
const SEQUENTIAL = new Array(15).fill(null).map((_, i) => i + 1);

const Room: NextPage = () => {
  const router = useRouter();
  const roomId = router.query.id as string;
  const room = trpc.useQuery(["room.getById", { id: roomId }], {
    enabled: !!roomId,
  });
  const allRoomSessions = trpc.useQuery(
    ["session.getRoomSessions", { roomId }],
    { enabled: !!roomId }
  );
  const startSessionMutation = trpc.useMutation(["user.startSession"]);

  const userSession = useMemo(() => {
    if (
      startSessionMutation.data &&
      !startSessionMutation.error &&
      !startSessionMutation.isLoading
    ) {
      sessionStorage.setItem("user", startSessionMutation.data.userId ?? "");
      return startSessionMutation.data;
    }

    return undefined;
  }, [
    startSessionMutation.data,
    startSessionMutation.error,
    startSessionMutation.isLoading,
  ]);

  useEffect(() => {
    if (roomId && !room.data?.name && !room.isLoading) {
      router.push("/");
    }
    const userId = sessionStorage.getItem("user");

    if (!userSession && !startSessionMutation.isLoading && roomId)
      startSessionMutation.mutate({ id: userId, roomId });
  }, [
    room.data?.name,
    room.isLoading,
    roomId,
    router,
    startSessionMutation,
    userSession,
  ]);

  const allSessions = [
    userSession,
    ...removeDuplicates(
      allRoomSessions.data?.filter(
        (s) => s.id !== userSession?.id && s.userId !== userSession?.userId
      ) ?? [],
      "userId"
    ),
  ];

  const [selected, setSelected] = useState<number | string | null>(null);

  return (
    <>
      <PageTitle title="Room" highlighted={room.data?.name} />
      <div className="flex gap-4">
        {allSessions.map((session) => (
          <UserCard
            key={session?.id}
            name={session?.user.name ?? ""}
            voting={session?.id !== userSession?.id}
            vote={selected ?? "-"}
            disableLoading={session?.id === userSession?.id}
            moderator={session?.userId === room?.data?.ownerId}
          />
        ))}
      </div>
      {selected ? (
        <div className="pt-8">
          <Button type="primary" label="Confirm" />
        </div>
      ) : undefined}
      <div className="grid grid-cols-4 gap-8 justify-center pt-8">
        {(room.data?.sequence === "1" ? FIBONACCI_SEQUENCE : SEQUENTIAL).map(
          (value) => (
            <PokerCard
              key={value}
              value={value}
              selected={selected === value}
              onClick={() => setSelected(value)}
            />
          )
        )}
      </div>
      {selected ? (
        <div className="pt-8">
          <Button type="primary" label="Confirm" />
        </div>
      ) : undefined}
    </>
  );
};

export default Room;
