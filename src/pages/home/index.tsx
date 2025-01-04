import { InterestGroups } from "@/components/interestGroup";
import { PointsGroup } from "@/components/points";
import { Button } from "@/components/ui/button";
import EventCard from "@/components/ui/eventCard";
import { ChevronRight } from "lucide-react";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
  easeInOut,
  useSpring,
} from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [name, karma, avg_karma, rank] = ["Edwin", "24.56K", "2.59K", "14458"];
  const lcevents = [
    {
      title: "AI/ML Learning Circle",
      location: "Bangalore",
      city: "India",
      participants: [
        {
          image: "/images/1.jpg",
          name: "John Doe",
        },
        {
          image: "/images/2.jpg",
          name: "Jane Doe",
        },
        {
          image: "/images/3.jpg",
          name: "John Doe",
        },
      ],
      imageUrl: "/lc/img1.webp",
    },
    {
      title: "Data Science Learning Circle",
      location: "Bangalore",
      city: "India",
      participants: [
        {
          image: "/images/1.jpg",
          name: "John Doe",
        },
        {
          image: "/images/2.jpg",
          name: "Jane Doe",
        },
        {
          image: "/images/3.jpg",
          name: "John Doe",
        },
      ],
      imageUrl: "/lc/img2.webp",
    },
  ];
  const [opacityValue, setOpacityValue] = useState(1);
  const { scrollYProgress } = useScroll();
  const actualValue = useTransform(scrollYProgress, [0, 0.35], [1, 0], {
    ease: easeInOut,
  });
  const springOpacity = useSpring(actualValue, { stiffness: 100, damping: 20 });

  useMotionValueEvent(scrollYProgress, "change", () => {
    console.log(actualValue.get());
    setOpacityValue(actualValue.get());
  });

  return (
    <div className="min-h-dvh pb-4">
      <motion.div
        style={{
          opacity: springOpacity,
          backgroundImage: `linear-gradient(181deg, rgba(49, 135, 244, 0.00) 53.37%, #3187F4 99.16%), url('/home.webp')`,
          aspectRatio: 414 / 536,
          width: "100%",
        }}
        className="sticky top-0 -z-10 flex flex-col justify-end items-center text-center gap-2 p-6 text-white bg-gradient-to-b from-transparent to-[#3187F4] bg-cover bg-center bg-no-repeat"
      >
        <div>Hey {name}</div>
        <div>
          "The only person you are destined to become is the person you decide
          to be."
        </div>
      </motion.div>
      <PointsGroup
        searchVisible={opacityValue === 0 ? true : false}
        className="pt-[50px] pb-[30px] px-4 flex items-center justify-center gap-2 bg-white sticky top-0 z-10"
        scores={{
          karma,
          avg_karma,
          rank,
        }}
      />
      <InterestGroups className="px-6 bg-white" />
      {/* Learning Circles with upcoming meets */}
      <div className="w-full flex flex-col justify-between items-start gap-3 px-4 bg-white">
        <h1 className="text-lg font-bold text-left w-full">
          Learning Circles with upcoming meets
        </h1>
        <div className="w-full overflow-x-auto no-scrollbar">
          <div className="flex gap-5 pb-4 min-w-max">
            {lcevents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
        <Button
          size={"lg"}
          className="rounded-full w-full p-6 font-normal font-PlusJakartaSans"
          type="submit"
        >
          View All Learning Circles
        </Button>
      </div>
      <div className="px-4 py-12 flex flex-col gap-3 bg-white">
        <div className="font-bold text-left w-full flex items-center justify-between gap-2 py-2">
          <div className="flex items-center gap-2">
            <img src="/leaderboard.webp" alt="" />
            Leaderboard
          </div>
          <ChevronRight />
        </div>
        <hr className="h-[1px] bg-[#787878]" />
        <div
          onClick={() => navigate("/opportunities")}
          className="font-bold text-left w-full flex items-center justify-between gap-2 py-2"
        >
          <div className="flex items-center gap-2">
            <img src="/opportunities.webp" alt="" />
            Opportunities
          </div>
          <ChevronRight />
        </div>
      </div>
      {/* Events this season */}
      <div className="w-full flex flex-col justify-between items-start gap-3 px-4 bg-white">
        <h1 className="font-bold text-left w-full">Events this season</h1>
        <div className="w-full overflow-x-auto no-scrollbar">
          <div className="flex gap-5 pb-4 min-w-max">
            {lcevents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </div>
      {/* Opportunities */}
      <div className="w-full flex flex-col justify-between items-start gap-3 px-4 bg-white">
        <h1 className="font-bold text-left w-full">Opportunities</h1>
        <div className="w-full overflow-x-auto no-scrollbar">
          <div className="flex gap-5 pb-4 min-w-max">
            {lcevents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
