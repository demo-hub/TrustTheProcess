import SettingsForm from "@components/SettingsForm";
import type { NextPage } from "next";
import { trpc } from "../../utils/trpc";

const PokerSettings: NextPage = () => {
  const mutation = trpc.useMutation(["room.create"]);

  const onSubmit = (values: { name: string; sequence: string }) => {
    mutation.mutate(values);
  };

  return (
    <>
      <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
        Pick your <span className="text-purple-300">Settings</span>
      </h1>
      <SettingsForm onSubmit={onSubmit} />
      {mutation.error && (
        <div className="text-red-500">{mutation.error.message}</div>
      )}
      <p>{JSON.stringify(mutation.data)}</p>
    </>
  );
};

export default PokerSettings;
