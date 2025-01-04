import PageHead from "@/components/ui/pageHead";
import { useState } from "react";
import { motion } from "framer-motion";

const PercentageBar = ({
  percentage,
  profilePic,
}: {
  percentage: number;
  profilePic: string;
}) => {
  return (
    <motion.div className="flex flex-col h-full items-center gap-3 justify-end">
      <img
        src={profilePic || "/avathars/avathar1.webp"}
        alt=""
        className="overflow-hidden rounded-full bg-orange-300 scale-150"
      />
      <h1>name</h1>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: `${percentage}%` }}
        transition={{ duration: 1 }}
        className="max-sm:w-16 h-full bg-gray-200 bg-primary"
      ></motion.div>
    </motion.div>
  );
};

const UserDetails = ({
  rank,
  name,
  karma,
}: {
  rank: number;
  name: string;
  karma: number;
}) => {
  return (
    <div className="flex items-center justify-between w-full gap-3 font-PlusJakartaSans font-semibold">
      <div className="">#{rank}</div>
      <div className="flex justify-between items-center w-3/4 gap-3">
        <div className="">{name}</div>
        <div className="">{karma}K</div>
      </div>
    </div>
  );
};

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState("All Time");
  const leaderboardData = [
    {
      position: "1",
      name: "Edwin",
      score: "45.55K",
      highlight: null,
    },
    {
      position: "2",
      name: "Anna",
      score: "35.69K",
      highlight: null,
    },
    {
      position: "3",
      name: "Martha",
      score: "24.55K",
      highlight: "green",
    },
    {
      position: "4",
      name: "Mariyam",
      score: "24.55K",
      highlight: "red",
    },
    {
      position: "5",
      name: "Andrew Garfield",
      score: "24.55K",
      highlight: null,
    },
    {
      position: "6",
      name: "Mahesh K K",
      score: "24.55K",
      highlight: "green",
    },
    {
      position: "7",
      name: "Adithyan P",
      score: "24.55K",
      highlight: null,
    },
    {
      position: "8",
      name: "John Doe",
      score: "20.00K",
      highlight: null,
    },
    {
      position: "9",
      name: "Jane Smith",
      score: "19.50K",
      highlight: "blue",
    },
    {
      position: "10",
      name: "Alice Johnson",
      score: "18.75K",
      highlight: null,
    },
    {
      position: "11",
      name: "Bob Brown",
      score: "17.80K",
      highlight: "yellow",
    },
    {
      position: "12",
      name: "Charlie Davis",
      score: "16.90K",
      highlight: null,
    },
  ];

  const convertKarmaToNumber = (karma: string) => {
    return parseFloat(karma.replace("K", "")) * 1000;
  };

  const highestKarma = Math.max(
    ...leaderboardData.map((user) => convertKarmaToNumber(user.score))
  );

  const calculatePercentage = (karma: number) => {
    return (karma / highestKarma) * 100;
  };

  const topThreeUsersWithPercentages = leaderboardData
    .slice(0, 3)
    .map((user) => ({
      ...user,
      karmaPercentage: calculatePercentage(convertKarmaToNumber(user.score)),
    }));

  console.log(topThreeUsersWithPercentages);
  return (
    <div className="min-h-dvh bg-white text-black px-4 py-6 space-y-4">
      <PageHead title="Leaderboard" />
      <div className="space-y-5 pt-6">
        <div className="flex mb-32">
          <button
            onClick={() => setActiveTab("All Time")}
            className={`flex-1 text-center pb-2 font-semibold text-sm ${
              activeTab === "All Time"
                ? "text-primary border-b-2 border-primary"
                : "text-gray-400"
            }`}
          >
            All Time
          </button>

          <button
            onClick={() => setActiveTab("This Week")}
            className={`flex-1 text-center pb-2 font-semibold ${
              activeTab === "This Week"
                ? "text-primary border-b-2 border-primary"
                : "text-gray-400"
            }`}
          >
            This Week
          </button>
        </div>
        {/* cahart here */}
        <div className="w-full flex justify-center items-end h-[40dvh] gap-16">
          <PercentageBar
            percentage={topThreeUsersWithPercentages[1].karmaPercentage}
            profilePic=""
          />
          <PercentageBar
            percentage={topThreeUsersWithPercentages[0].karmaPercentage}
            profilePic=""
          />
          <PercentageBar
            percentage={topThreeUsersWithPercentages[2].karmaPercentage}
            profilePic=""
          />
        </div>
        <div className="flex flex-col gap-3 justify-start items-start">
          <div className="font-semibold">Your Rank</div>
          <UserDetails rank={1} name="Edwin" karma={45.55} />
        </div>
        <div className="flex flex-col gap-3 justify-start items-start pt-4">
          <div className="font-semibold">Leaderboard</div>
          {leaderboardData.map((item) => (
            <UserDetails
              key={item.position}
              rank={parseInt(item.position)}
              name={item.name}
              karma={parseFloat(item.score)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
