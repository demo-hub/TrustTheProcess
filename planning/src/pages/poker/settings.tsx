import SettingsForm from "@components/SettingsForm";
import type { NextPage } from "next";

const PokerSettings: NextPage = () => {
  return (
    <>
      <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
        Pick your <span className="text-purple-300">Settings</span>
      </h1>
      <SettingsForm />
    </>
  );
};

export default PokerSettings;
