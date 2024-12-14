import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Completed = () => {
  const navigate = useNavigate();
  return (
    <div className="py-32 flex flex-col justify-between items-center font-PlusJakartaSans h-dvh px-4">
      <h3 className="font-bold tracking-tight">You are one of a kind. </h3>
      <div className="flex flex-col justify-between items-center">
        <img src="/common/certificate.webp" alt="" height={250} width={250} />
        <h3 className="font-bold tracking-tight">The Tech-Savvy Innovator </h3>
        <p className="text-center max-w-[80%] text-sm">
          Programming Proficiency | Web Development Mastery | Data Science
          Expertise | Cloud Computing Savvy | Innovative Mindset
        </p>
        <Button
          size={"lg"}
          onClick={() => navigate("/signup")}
          className="rounded-full w-full p-6 font-normal font-PlusJakartaSans mt-24 "
          type="submit"
        >
          Sign Up to upskill yourself
        </Button>
      </div>
    </div>
  );
};

export default Completed;
