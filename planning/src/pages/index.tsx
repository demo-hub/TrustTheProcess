import Card from "@components/Card";
import Modal from "@components/Modal";
import PageTitle from "@components/PageTitle";
import SettingsForm from "@components/SettingsForm";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { trpc } from "src/utils/trpc";

const Home: NextPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const mutation = trpc.useMutation(["room.create"]);

  const router = useRouter();
  useEffect(() => {
    if (mutation.data && !mutation.error) {
      sessionStorage.setItem("user", mutation.data.ownerId ?? "");
      router.push(`/room/${mutation.data.id}`);
    }
  }, [mutation.data, mutation.error, router]);

  const onSubmit = (values: { name: string; sequence: string }) => {
    const user = sessionStorage.getItem("user");

    mutation.mutate({ ...values, ownerId: user });
  };

  return (
    <>
      <PageTitle title="Pick your" highlighted="Method" />
      <div className="grid gap-3 pt-3 mt-3 text-center md:grid-cols-2">
        <div onClick={() => setModalOpen(true)}>
          <Card
            name="Planning Poker"
            description="Number-coded playing cards are used to estimate an item"
          />
        </div>
        <Card
          name="Bucket System"
          description="User stories (items) are placed within buckets (columns)"
          unavailable
        />
        <Card
          name="Three-Point Method"
          description="User stories (items) are estimated using a three-point method"
          unavailable
        />
      </div>
      {modalOpen ? (
        <Modal
          title="Pick your"
          highlightedWord="settings"
          onClose={() => setModalOpen(false)}
        >
          <>
            <SettingsForm onSubmit={onSubmit} loading={mutation.isLoading} />
            {mutation.error ? (
              <div className="text-red-500">{mutation.error.message}</div>
            ) : undefined}
          </>
        </Modal>
      ) : undefined}
    </>
  );
};

export default Home;
