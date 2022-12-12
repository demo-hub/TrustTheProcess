import type { Room } from "@prisma/client";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import styles from "./room.module.css";

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
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.pinkSpan}>{room?.name}</span>
      </h1>
    </div>
  );
};

export default RoomPage;
