import PageHead from "@/components/ui/pageHead";
import { useState } from "react";

const IGPage = () => {
  // Dummy data for rendering interest groups
  const interestGroups = [
    { id: 1, title: "Digital Marketing" },
    { id: 2, title: "Digital Marketing" },
    { id: 3, title: "Digital Marketing" },
    { id: 4, title: "Digital Marketing" },
    { id: 5, title: "Digital Marketing" },
    { id: 6, title: "Digital Marketing" },
    { id: 7, title: "Digital Marketing" },
    // Add more interest groups here
    { id: 8, title: "Digital Marketing" },
    { id: 9, title: "Digital Marketing" },
    { id: 10, title: "Digital Marketing" },
    { id: 11, title: "Digital Marketing" },
    { id: 12, title: "Digital Marketing" },
  ];

  const [activeTab, setActiveTab] = useState("yourIGs");
  return (
    <div className="min-h-dvh bg-white text-black px-4 py-6 space-y-4">
      {/* <div className="relative">
        <ChevronLeft
          className="absolute top-1/2 left-0 -translate-y-1/2"
          onClick={() => navigate(-1)}
        />
        <h1 className="text-xl font-bold text-center ">All Interest Groups</h1>
      </div> */}
      <PageHead title="All Interest Groups" />

      <div className="w-full border-b sticky top-0 z-10 bg-white pt-6">
        {/* Tabs Container */}
        <div className="flex">
          {/* Your IGs Tab */}
          <button
            onClick={() => setActiveTab("yourIGs")}
            className={`flex-1 text-center pb-2 font-semibold text-sm ${
              activeTab === "yourIGs"
                ? "text-primary border-b-2 border-primary"
                : "text-gray-400"
            }`}
          >
            Your IGs
          </button>

          {/* Explore IGs Tab */}
          <button
            onClick={() => setActiveTab("exploreIGs")}
            className={`flex-1 text-center pb-2 font-semibold ${
              activeTab === "exploreIGs"
                ? "text-primary border-b-2 border-primary"
                : "text-gray-400"
            }`}
          >
            Explore IGs
          </button>
        </div>
      </div>

      {/* Interest Groups */}
      <div className="space-y-8 overflow-y-scroll mt-4">
        {interestGroups.map((group) => (
          <div key={group.id} className="flex items-center space-x-4 bg-white">
            {/* Icon */}
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <img
                src="/ig/digital_markerting.webp"
                alt="Icon"
                className="w-10 h-10"
              />
            </div>
            {/* Text */}
            <p className="tracking-tight text-xl">{group.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IGPage;
