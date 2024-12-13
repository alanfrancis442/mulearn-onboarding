import { Input } from "@/components/ui/input";

const LearnignCircle = () => {
  return (
    <div className="px-4 py-8 space-y-5 bg-white flex flex-col justify-between items-center overflow-hidden h-screen font-PlusJakartaSans">
      <div>
        <h1 className="text-2xl font-bold text-center ">Learning Circle</h1>
      </div>
      <div>
        <Input
          type="text"
          placeholder="Search for topics, skills, colleges, locations"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default LearnignCircle;
