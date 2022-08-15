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
      <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
        Pick your <span className="text-purple-300">Settings</span>
      </h1>
      <SettingsForm onSubmit={onSubmit} />
      {mutation.error ? (
        <div className="text-red-500">{mutation.error.message}</div>
      ) : undefined}
    </>
  );
};

export default PokerSettings;
