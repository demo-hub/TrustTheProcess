import { Avatar, Card, CardBody, SimpleGrid, Text } from "@chakra-ui/react";
import type { Room, RoomSessions } from "@prisma/client";
import type { DefaultEventsMap } from "@socket.io/component-emitter";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useCallback, useEffect, useState } from "react";
import type { Socket } from "socket.io-client";
import { io } from "socket.io-client";
import { uuid } from "uuidv4";
import styles from "./room.module.css";

// Fibonacci sequence
const FIBONACCI = [1, 2, 3, 5, 8, 13, 21, 34];

export const getServerSideProps: GetServerSideProps<{
  room: Room | null | undefined;
}> = async (context) => {
  const { id } = context.query;

  const room = await prisma?.room.findUnique({
    where: {
      id: id as string,
    },
  });

  return {
    props: {
      room,
    },
  };
};

// Function to generate random usernames
const generateUsername = (): string => {
  const adjectives = [
    "adorable",
    "beautiful",
    "clean",
    "elegant",
    "fancy",
    "glamorous",
    "handsome",
    "long",
    "magnificent",
    "old-fashioned",
    "plain",
    "quaint",
    "sparkling",
    "ugliest",
    "unsightly",
    "wide-eyed",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "gray",
    "black",
    "white",
    "pink",
  ];
  const nouns = [
    "cat",
    "dog",
    "horse",
    "pig",
    "cow",
    "chicken",
    "duck",
    "goose",
    "sheep",
    "turkey",
    "dove",
    "raven",
    "crow",
    "sparrow",
    "robin",
    "cardinal",
    "bluejay",
    "oriole",
    "pigeon",
    "peacock",
    "canary",
    "finch",
    "sparrow",
    "meadowlark",
    "woodpecker",
    "wren",
  ];

  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];

  return `${adjective}-${noun}`;
};

let socket: Socket<DefaultEventsMap, DefaultEventsMap>;

const RoomPage = ({
  room,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [users, setUsers] = useState<RoomSessions[] | undefined>([]);
  const [vote, setVote] = useState<number | undefined>(undefined);

  const socketInitializer = useCallback(async () => {
    await fetch("/api/socket");
    socket = io();

    socket?.on("connect", () => {
      console.log("Connected to socket.io");
    });

    // Get user id from local storage
    const userId = sessionStorage.getItem("userId");

    if (!userId) {
      // Set a random user id in local storage
      sessionStorage.setItem("userId", uuid());
    }

    socket?.emit("room-connection", {
      userId: userId,
      roomId: room?.id,
    });

    socket?.on("update-users", (users: RoomSessions[] | undefined) => {
      const currentUser = users?.find(
        (u) => u.userId === sessionStorage.getItem("userId")
      );

      let invitees = users?.filter(
        (u) => u.userId !== sessionStorage.getItem("userId")
      );

      // Remove duplicate users
      invitees = invitees?.filter(
        (v, i, a) => a.map((mapObj) => mapObj.userId).indexOf(v.userId) === i
      );

      setUsers([
        currentUser || { id: "", userName: "", userId: "", roomId: "" },
        ...(invitees || []),
      ]);
    });

    socket?.on(
      "update-vote",
      (msg: { roomId: string; userId: string; vote: number }) => {
        // Only update the vote if the message is for the current room and user
        if (
          msg.roomId !== room?.id ||
          msg.userId !== sessionStorage.getItem("userId")
        ) {
          return;
        }

        setVote(msg.vote);
      }
    );
  }, [room?.id]);

  const voting = (num: number) => {
    socket?.emit("vote", {
      userId: sessionStorage.getItem("userId"),
      roomId: room?.id,
      vote: num,
    });
  };

  useEffect(() => {
    socketInitializer();
  }, [socketInitializer]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.pinkSpan}>{room?.name}</span>
      </h1>

      <div className={styles.users}>
        {users?.map((user) => (
          <div key={user.id} className={styles.avatarName}>
            <Avatar
              name={user.userId}
              src={`https://avatars.dicebear.com/api/avataaars/${user.id}.svg`}
              size="xl"
            />
            <Text
              fontSize="xl"
              color={
                user.userId === sessionStorage.getItem("userId")
                  ? "hsl(280 100% 70%)"
                  : "white"
              }
              as="b"
            >
              {user.userName}
            </Text>
          </div>
        ))}
      </div>

      <SimpleGrid spacing={4} templateColumns="repeat(4, minmax(160px, 1fr))">
        {FIBONACCI.map((num) => (
          <Card
            key={num}
            variant="filled"
            align="center"
            className={
              styles.card + " " + (num === vote ? styles.highlightedCard : "")
            }
            onClick={() => {
              voting(num);
            }}
          >
            <CardBody>
              <Text fontSize="4xl" color="hsl(280 100% 70%)" as="b">
                {num}
              </Text>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default RoomPage;
