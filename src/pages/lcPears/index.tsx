import { ChevronLeft, Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import React from "react";
import { Button } from "@/components/ui/button";

interface Peer {
  name: string;
  institute: string;
  karma: number;
  avathar: string;
}

interface PersonCardProps {
  name: string;
  institute: string;
  karma: number;
  avathar: string;
}

const PersonCard: React.FC<PersonCardProps> = ({
  name,
  institute,
  karma,
  avathar,
}) => {
  return (
    <div className="bg-white rounded-lg flex items-center justify-between">
      <div className="flex items-center gap-1">
        <img
          src={avathar}
          alt={`${name}'s avatar`}
          className="w-16 h-16 rounded-full"
        />
        <div className="flex flex-col ml-2">
          <h3 className=" text-lg font-semibold">{name}</h3>
          <p className="text-gray-600 text-sm text-nowrap">{institute}</p>
        </div>
      </div>
      <div>
        <p className="mt-2 text-black text-right font-semibold">
          {" "}
          {karma}K <br />{" "}
          <span className="text-xs text-gray-500 font-normal">Karma</span>
        </p>
      </div>
    </div>
  );
};

const LcPears: React.FC = () => {
  const navigate = useNavigate();

  const peers: Peer[] = [
    {
      name: "Vinod Kamble",
      institute: "College of Engineering Trivandrum",
      karma: 14.56,
      avathar: "/avathars/avathar1.webp",
    },
    {
      name: "Jaidan Sleeba",
      institute: "College of Engineering Trivandrum",
      karma: 56,
      avathar: "/avathars/avathar2.webp",
    },
    {
      name: "Amina Jubair",
      institute: "College of Engineering Trivandrum",
      karma: 7.8,
      avathar: "/avathars/avathar3.webp",
    },
    {
      name: "Aleena James",
      institute: "College of Engineering Trivandrum",
      karma: 5.23,
      avathar: "/avathars/avathar4.webp",
    },
    {
      name: "Vaishak Mohandas",
      institute: "College of Engineering Trivandrum",
      karma: 9.88,
      avathar: "/avathars/avathar5.webp",
    },
  ];
  return (
    <div className="px-4 py-8 gap-16 bg-white flex flex-col justify-start overflow-hidden min-h-screen font-PlusJakartaSans">
      <div className="relative">
        <ChevronLeft
          className="absolute top-1/2 left-0 -translate-y-1/2"
          onClick={() => navigate(-1)}
        />
        <h1 className="text-xl font-bold text-center ">
          Digital Marketing Introduction
        </h1>
      </div>
      <h1 className="text-xl font-bold text-center">Meet Your Peers</h1>
      <div className=" flex flex-col justify-center overflow-hidden gap-5">
        {peers.map((peer) => (
          <PersonCard
            key={peer.name}
            name={peer.name}
            institute={peer.institute}
            karma={peer.karma}
            avathar={peer.avathar}
          />
        ))}
      </div>
      <Button
        size={"lg"}
        className="rounded-full p-6 font-normal font-PlusJakartaSans my-2"
      >
        <Share2 />
        Invite to the circle
      </Button>
    </div>
  );
};

export default LcPears;
