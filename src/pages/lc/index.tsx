import { Button } from "@/components/ui/button";
import EventCard from "@/components/ui/eventCard";

const LearnignCircle = () => {
  const interestsgroups = [
    "AI/ML",
    "Data Science",
    "Web Development",
    "Mobile Development",
    "Cyber Security",
    "Game Development",
    "Cloud Computing",
    "DevOps",
    "IoT",
    "Blockchain",
    "AR/VR",
    "Robotics",
    "Quantum Computing",
  ];

  //create me some dummy events
  const events = [
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
  return (
    <div className="px-4 py-8 space-y-5 bg-white flex flex-col justify-between overflow-hidden min-h-screen font-PlusJakartaSans">
      <div className="relative">

        <h1 className="text-xl font-bold text-center ">Learning Circles</h1>
      </div>
      <div className="flex flex-col space-y-3 w-full">
        <div className=" rounded-full border flex items-center p-4 gap-2 w-full">
          <SearchSVG />
          <input
            type="text"
            placeholder="Search for topics, skills, colleges, locations"
            className="w-full border-0 focus:ring-0 focus:outline-none"
          />
        </div>
        <div className="flex gap-1 overflow-x-auto">
          {interestsgroups.map((interest, index) => (
            <div
              key={index}
              className="border text-nowrap p-2 px-4 rounded-full text-[#787878] text-sm leading-none"
            >
              {interest}
            </div>
          ))}
        </div>
      </div>
      <Button
        size={'lg'}
        className="rounded-full w-full py-4 font-semibold"
        type="submit"
      >
        Create new learning circle
      </Button>
      <div className="w-full flex flex-col justify-between items-start gap-5">
        <h1 className="text-lg font-bold text-left w-full">
          Learning Circles with upcoming meets
        </h1>
        <div className="w-full overflow-x-auto no-scrollbar">
          <div className="flex gap-5 pb-4 min-w-max">
            {events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-sm font-bold mb-3">
          All Learning Circles
        </h2>
        <div className="flex flex-col gap-5 pb-4">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearnignCircle;

const SearchSVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m21 21-3.5-3.5m2.5-6a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0"
      stroke="#949494"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);