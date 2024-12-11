import useQuestionStore from "@/hooks/questionStore";
import { cn } from "@/lib/utils";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const { currentQuestionIndex, questions } = useQuestionStore();

  return (
    <div className="px-4 py-8 bg-white flex flex-col justify-between mb-16 h-screen overflow-hidden">
      <div>
        <h4 className="text-primary font-bold tracking-tight leading-5">
          Lets bring out the true YOU <br />
          Answer these questions to discover yourself
        </h4>
        <div className="flex gap-1 mt-5">
          {Array.from({ length: questions.length }).map((_, index) => (
            <div
              key={index}
              className={cn(
                "w-full h-[4px] bg-[rgba(212,212,212,1)] rounded-full",
                index <= currentQuestionIndex
                  ? "bg-primary"
                  : "bg-[rgba(212,212,212,1)]"
              )}
            />
          ))}
        </div>
      </div>
      <Outlet />
      <h5 className="text-primary font-semibold tracking-tight">
        Feeling confident about myself. Skip quiz and signup
      </h5>
    </div>
  );
};

export default Layout;
