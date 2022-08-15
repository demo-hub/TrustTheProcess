import PageTitle from "@components/PageTitle";
import SettingsForm from "@components/SettingsForm";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { trpc } from "../../utils/trpc";

const PokerSettings: NextPage = () => {
  const mutation = trpc.useMutation(["room.create"]);

  const router = useRouter();
  useEffect(() => {
    if (mutation.data && !mutation.error) {
      router.push(`/room/${mutation.data.id}`);
    }
  }, [mutation.data, mutation.error, router]);

  const onSubmit = (values: { name: string; sequence: string }) => {
    mutation.mutate(values);
  };

  return (
    <>
      <PageTitle title="Pick your" highlighted="Settings" />
      <SettingsForm onSubmit={onSubmit} />
      {mutation.error ? (
        <div className="text-red-500">{mutation.error.message}</div>
      ) : undefined}
    </>
  );
};

export default PokerSettings;
