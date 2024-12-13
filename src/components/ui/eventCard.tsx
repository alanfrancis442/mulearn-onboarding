import React from "react";

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
    <div className="max-w-sm p-4 bg-white rounded-lg shadow-md">
      <div className="relative">
        <img
          src={imageUrl}
          alt="Event"
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="mt-2 text-sm text-gray-500">
          {location}, {city}
        </p>
        <div className="flex items-center mt-4">
          <div className="flex -space-x-2">
            {participants.slice(0, 3).map((participant, index) => (
              <img
                key={index}
                src={participant.image}
                alt={participant.name}
                className="w-8 h-8 border-2 border-white rounded-full"
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">
            {participants.length} people you might know have joined
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
