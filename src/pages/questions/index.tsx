import { Button } from "@/components/ui/button";
import Outline from "@/components/ui/outline";
import useQuestionStore from "@/hooks/questionStore";
import { cn } from "@/lib/utils";
import { useState } from "react";

const Questions = () => {
  const { questions, currentQuestionIndex, setSelectedOption, nextQuestion } =
    useQuestionStore();

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(currentQuestionIndex, optionIndex);
    nextQuestion();
  };

  const [selectedIndex, setselectedIndex] = useState<number | null>(null);

  return (
    <div className="pt-12 h-full flex flex-col justify-between pb-4">
      <h2 className="font-PlusJakartaSans font-bold text-2xl tracking-tight">
        {currentQuestion.question}
      </h2>
      <ul className="space-y-5">
        {currentQuestion.options.map((option, index) => (
          <li key={index}>
            <Outline
              onClick={() => {
                setselectedIndex(index);
              }}
              className={cn(
                "text-wrap text-lg shadow-none font-PlusJakartaSans p-5 rounded-2xl text-[rgba(120,120,120,1)] ring-black ring-[0.5px] font-semibold ",
                selectedIndex === index
                  ? "ring-primary ring-[1.5px] text-black"
                  : "border-[rgba(0,0,0,1)]"
              )}
            >
              {option.text}
            </Outline>
          </li>
        ))}
      </ul>
      <Button
        size={"lg"}
        className="rounded-full w-full p-6 font-normal font-PlusJakartaSans my-2 "
        type="submit"
        onClick={() => {
          if (selectedIndex !== null) {
            handleOptionSelect(selectedIndex);
          }
        }}
      >
        Next
      </Button>
    </div>
  );
};

export default Questions;
