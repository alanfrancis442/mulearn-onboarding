import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RoutsLayout = () => {
  const navigate = useNavigate();
  return (
    <div className="px-4 py-8 space-y-5 bg-white flex flex-col justify-between overflow-hidden min-h-screen font-PlusJakartaSans">
      <div className="relative">
        <ChevronLeft
          className="absolute top-1/2 left-0 -translate-y-1/2"
          onClick={() => navigate(-1)}
        />
        <h1 className="text-xl font-bold text-center ">Learning Circles</h1>
      </div>
    </div>
  );
};

export default RoutsLayout;
