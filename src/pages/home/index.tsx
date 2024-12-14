import { InterestGroups } from "@/components/interestGroup";
import { PointsGroup } from "@/components/points";

const Home = () => {
  const [name, karma, avg_karma, rank] = ["Edwin", "24.56K", "2.59K", "14458"];
  return (
    <div className=" min-h-dvh pb-4">
      <div
        className="flex flex-col justify-end items-center text-center gap-2 p-6 text-white bg-gradient-to-b from-transparent to-[#3187F4] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(181deg, rgba(49, 135, 244, 0.00) 53.37%, #3187F4 99.16%), url('/home.webp')`,
          aspectRatio: 414 / 536,
          width: "100%",
        }}
      >
        <div>Hey {name}</div>
        <div>
          "The only person you are destined to become is the person you decide
          to be."
        </div>
      </div>
      <PointsGroup
        className="mt-[50px] mb-[30px]  px-4 flex items-center justify-center gap-2"
        scores={{
          karma,
          avg_karma,
          rank,
        }}
      />

      <InterestGroups className="px-6" />
    </div>
  );
};

export default Home;
