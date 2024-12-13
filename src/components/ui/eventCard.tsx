import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Participant {
  image: string;
  name: string;
}

interface EventCardProps {
  title: string;
  location: string;
  city: string;
  participants: Participant[];
  imageUrl: string;
}

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
          className="w-full h-28 object-cover rounded-lg"
        />
      </div>
      <div className="pt-4 capitalize">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <p className="text-lg">college name</p>
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
};

export default EventCard;
