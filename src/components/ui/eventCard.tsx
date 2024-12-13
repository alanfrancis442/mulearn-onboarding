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
    <div className="w-[285px] px-[10px] py-4 bg-white rounded-2xl border border-[#949494] flex-shrink-0">
      <img
        src={imageUrl}
        alt="Event"
        className="w-full h-16 object-cover object-center rounded-lg"
      />
      <div className="pt-4 capitalize flex flex-col gap-2">
        <h2 className="font-bold">{title}</h2>
        <p className="text-sm">College of Engineering Trivandrum</p>
        <p className="text-sm">
          {location}, {city}
        </p>
        <div className="flex items-center mt-4">
          <div className="flex -space-x-2">
            {participants.slice(0, 3).map((participant, index) => (
              <Avatar className="h-4 w-4" key={index}>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>{participant.name}</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <span className="ml-2 text-xs text-gray-600">
            {participants.length} people you might know have joined
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
