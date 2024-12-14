import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-primary h-dvh flex flex-col gap-8 justify-between">
      <div className="text-white font-PlusJakartaSans p-8 font-medium">
        <h3>Hey</h3>
        <h3>You still trying to figure out what μlearn </h3>
        <h3>is? Check this out 👇</h3>
        <div className="px-5 mt-8">
          <iframe
            className="w-full h-52 rounded-3xl"
            src="https://www.youtube.com/embed/M9serw-CLU0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="bg-white text-black relative py-16 px-5 gap-6 flex flex-col h-[55%] justify-center items-center text-center tracking-tighter rounded-t-3xl">
        <img src="/Logo.svg" alt="" height={100} width={100} />
        <img
          src="/common/planet.webp"
          alt=""
          height={90}
          width={90}
          className="absolute top-3 right-3"
        />
        <div className="w-5/6">
          <h1 className="text-3xl font-bold tracking-tighter text-nowrap">
            Learn Skills In No Time
          </h1>
          <h3 className="text-lg font-normal mt-2">
            Learn, grow, and connect with a community of passionate learners.
            Unlock your full potential together.
          </h3>
        </div>
        <div className="mt-16 w-full">
          <Button
            size={"lg"}
            className="rounded-full w-full p-6 font-normal font-PlusJakartaSans my-2"
            type="submit"
            onClick={() => navigate("/questions")}
          >
            Discover Who You Are
          </Button>
          <p className=" mt-4 text-primary">
            Already have an account?{" "}
            <a
              onClick={() => navigate("/signin")}
              className="text-lg font-semibold"
            >
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
