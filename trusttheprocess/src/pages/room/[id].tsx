import { Card, CardBody, SimpleGrid, Text } from "@chakra-ui/react";
import type { Room } from "@prisma/client";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useEffect } from "react";
import { io } from "socket.io-client";
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

const RoomPage = ({
  room,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  useEffect(() => {
    socketInitializer();
  }, []);

  const socketInitializer = async () => {
    await fetch("/api/socket");
    const socket = io();

    socket.on("connect", () => {
      console.log("connected");
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.pinkSpan}>{room?.name}</span>
      </h1>

      <SimpleGrid spacing={4} templateColumns="repeat(4, minmax(160px, 1fr))">
        {FIBONACCI.map((num) => (
          <Card
            key={num}
            variant="filled"
            align="center"
            className={styles.card}
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
