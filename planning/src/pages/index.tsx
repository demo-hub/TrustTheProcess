import type { NextPage } from "next";
import Card from "@components/Card";
import Link from "next/link";
import PageTitle from "@components/PageTitle";

const Home: NextPage = () => {
  return (
    <>
      <PageTitle title="Pick your" highlighted="Method" />
      <div className="grid gap-3 pt-3 mt-3 text-center md:grid-cols-2">
        <Link href="/poker/settings">
          <a>
            <Card
              name="Planning Poker"
              description="Number-coded playing cards are used to estimate an item"
            />
          </a>
        </Link>
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

export default Home;
