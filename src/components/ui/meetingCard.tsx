import React from "react";
import { CalendarPlus2, Clock } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Button } from "./button";

interface MeetingCardProps {
  organizer: string;
  time: string;
  date: string;
  agendaLink: string;
  joinLink: string;
  avatarUrl: string;
}

const MeetingCard: React.FC<MeetingCardProps> = ({
  organizer,
  time,
  date,
  agendaLink,
  joinLink,
  avatarUrl,
}) => {
  return (
    <div className="flex items-center max-w-md w-full p-3 py-4 bg-[#F1F4FF] rounded-2xl border-[#949494] border shadow-none">
      <div className="flex-1 space-y-5">
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>{avatarUrl}</AvatarFallback>
          </Avatar>

          <p className="text-sm text-black font-semibold">
            {organizer} has scheduled a learning circle meet
          </p>
        </div>
        <div className="flex gap-3 items-center text-sm font-semibold ">
          <div className="flex gap-2 items-center mr-4">
            <Clock />
            {time}
          </div>
          <div className="flex gap-2 items-center">
            <CalendarPlus2 />
            {date}
          </div>
        </div>
        <div className="flex justify-between items-cente gap-8">
          <Button
            size={"lg"}
            className="w-full rounded-full text-primary border-primary"
            variant={"outline"}
          >
            <a href={agendaLink}>View Agenda</a>
          </Button>
          <Button size={"lg"} className="w-full rounded-full">
            <a href={joinLink}>Join Now</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MeetingCard;
