import { Button } from "@/components/ui/button";
import MeetingCard from "@/components/ui/meetingCard";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LcEvent = () => {
  const [isAgendaVisible, setIsAgendaVisible] = useState(false);

  const navigate = useNavigate();
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
    <div className="flex flex-col items-center gap-8 bg-white p-4 min-h-dvh relative">
      <div className="flex gap-3 items-center w-full">
        <ChevronLeft onClick={() => navigate(-1)} />
        <span className="text-xl font-semibold">
          Digital Marketing Introduction
        </span>
      </div>
      <div className="flex flex-col items-center w-full space-y-4 text-primary font-semibold">
        <div className="flex justify-between items-center w-full">
          <span>View Peers in this learning circle</span>
          <ChevronRight onClick={() => navigate("/lc/pears/1")} />
        </div>
        <Button
          size={"lg"}
          className="rounded-full w-full p-6 font-normal font-PlusJakartaSans my-2"
          type="submit"
        >
          Schedule a Meeting
        </Button>
      </div>
      <div className="space-y-4 w-full">
        {meetings.map((meeting) => (
          <MeetingCard
            key={meeting.id}
            organizer={meeting.organizer}
            time={meeting.time}
            date={meeting.date}
            agendaLink={meeting.agendaLink}
            joinLink={meeting.joinLink}
            avatarUrl={meeting.avatarUrl}
            viewAgenta={() => setIsAgendaVisible(true)}
          />
        ))}
      </div>
      <AnimatePresence>
        {isAgendaVisible && (
          <motion.div
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-full h-[100vh] bg-black/50 z-50 flex justify-center items-center"
          >
            <motion.div
              className="flex flex-col px-6 py-4 absolute bottom-0 left-0 border bg-white rounded-t-3xl shadow-md justify-between items-center w-full min-h-[50vh] text-center"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <h1 className="my-3 text-xl font-bold mb-6">Agenda</h1>
                <X
                  className="absolute top-3 right-0 text-orange-500 font-bold cursor-pointer"
                  onClick={() => setIsAgendaVisible(false)}
                />
                <p className="leading-normal text-left">
                  This learning circle meeting will begin with a brief welcome
                  and introductions, followed by a review of the previous
                  meeting's key takeaways and action items. We will then delve
                  into a focused discussion on a specific digital marketing
                  topic, such as Search Engine Optimization (SEO) basics. This
                  will include key concepts, real-world applications, and a Q&A
                  session. Next, we will outline action items for individual or
                  group members, schedule the next meeting, and discuss
                  potential guest speakers or workshops. Finally, we will have
                  an open discussion for members to share personal projects,
                  network, and explore other digital marketing topics of
                  interest.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LcEvent;
