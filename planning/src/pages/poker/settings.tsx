import type { NextPage } from "next";
import Card from "@components/Card";

const PokerSettings: NextPage = () => {
  return (
    <>
      <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
        Pick your <span className="text-purple-300">Settings</span>
      </h1>
      <div className="grid gap-3 pt-3 mt-3 text-center md:grid-cols-2">
        <Card
          name="Planning Poker"
          description="Number-coded playing cards are used to estimate an item"
        />
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
    </>
  );
};

export default PokerSettings;
