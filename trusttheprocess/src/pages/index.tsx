import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./index.module.css";

import router from "next/router";
import { useEffect } from "react";
import { uuid } from "uuidv4";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  useEffect(() => {
    // Get user id from local storage
    const userId = sessionStorage.getItem("userId");

    if (!userId) {
      // Set a random user id in local storage
      sessionStorage.setItem("userId", uuid());
    }
  }, []);

  const roomMutation = trpc.room.createRoom.useMutation();

  const createRoom = async () => {
    // Create a public room with trpc
    const room = await roomMutation.mutateAsync({
      name: "",
    });

    // Redirect to the room
    router.push(`/room/${room.id}`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Trust The <span className={styles.pinkSpan}>Process</span>
      </h1>
      <div className={styles.cardRow} onClick={() => createRoom()}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Create new room →</h3>
          <div className={styles.cardText}>Create a new public room</div>
        </div>
      </div>
      <div className={styles.showcaseContainer}>
        <AuthShowcase />
      </div>
    </div>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className={styles.authContainer}>
      <p className={styles.showcaseText}>
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className={styles.loginButton}
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
