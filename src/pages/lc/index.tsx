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
    <div className="px-4 py-8 space-y-5 bg-white flex flex-col justify-between items-center overflow-hidden h-screen font-PlusJakartaSans">
      <div>
        <h1 className="text-2xl font-bold text-center ">Learning Circle</h1>
      </div>
      <div className="flex flex-col space-y-3 w-full">
        <div className=" rounded-full border flex items-center p-4 gap-5 w-full">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z"
              stroke="#949494"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
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
              className="border text-nowrap p-2 px-4 rounded-full text-[#787878] text-base leading-none"
            >
              {interest}
            </div>
          ))}
        </div>
      </div>
      <Button
        size={"lg"}
        className="rounded-full w-full p-8 font-normal font-PlusJakartaSans text-lg"
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
    </div>
  );
};

export default LearnignCircle;
/*
const EventCard: React.FC<EventCardProps> = ({
  title,
  location,
  city,
  participants,
  imageUrl,
}) => {
  return (
    <div className="max-w-sm w-[calc(95vw-20px)] p-3 py-5 bg-white rounded-2xl border border-[#949494]">
      <div className="relative">
        <img
          src={imageUrl}
          alt="Event"
          className="w-[247px] h-16 object-cover rounded-lg"
        />
      </div>
      <div className="pt-4 capitalize ">
        <h2 className="font-bold">{title}</h2>
        <p className="text-lg">College of Engineering Trivandrum</p>
        <p className="mt-1 text-lg text-gray-500">
          {location}, {city}
        </p>
        <div className="flex items-center mt-4">
          <div className="flex -space-x-2">
            {participants.slice(0, 3).map((participant, index) => (
              <Avatar className="h-6 w-6" key={index}>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>{participant.name}</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <span className="ml-2 text-base text-gray-600">
            {participants.length} people you might know have joined
          </span>
        </div>
      </div>
    </div>
  );
};*/