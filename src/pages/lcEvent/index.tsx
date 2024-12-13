import MeetingCard from "@/components/ui/meetingCard";

const LcEvent = () => {
  const meetings = [
    {
      id: 1,
      organizer: "Narayan Pillai",
      time: "04:30 PM",
      date: "16 December 2024",
      agendaLink: "#",
      joinLink: "#",
      avatarUrl: "https://via.placeholder.com/150?text=NP",
    },
    {
      id: 2,
      organizer: "Meera Suresh",
      time: "10:00 AM",
      date: "17 December 2024",
      agendaLink: "#",
      joinLink: "#",
      avatarUrl: "https://via.placeholder.com/150?text=MS",
    },
    {
      id: 3,
      organizer: "Rajesh Kumar",
      time: "02:00 PM",
      date: "18 December 2024",
      agendaLink: "#",
      joinLink: "#",
      avatarUrl: "https://via.placeholder.com/150?text=RK",
    },
    {
      id: 4,
      organizer: "Anjali Menon",
      time: "11:30 AM",
      date: "19 December 2024",
      agendaLink: "#",
      joinLink: "#",
      avatarUrl: "https://via.placeholder.com/150?text=AM",
    },
    {
      id: 5,
      organizer: "Vivek Nair",
      time: "05:45 PM",
      date: "20 December 2024",
      agendaLink: "#",
      joinLink: "#",
      avatarUrl: "https://via.placeholder.com/150?text=VN",
    },
  ];
  return (
    <div className="flex flex-col items-center space-y-4 bg-white p-4 min-h-screen">
      {meetings.map((meeting) => (
        <MeetingCard
          key={meeting.id}
          organizer={meeting.organizer}
          time={meeting.time}
          date={meeting.date}
          agendaLink={meeting.agendaLink}
          joinLink={meeting.joinLink}
          avatarUrl={meeting.avatarUrl}
        />
      ))}
    </div>
  );
};

export default LcEvent;
