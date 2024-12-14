import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import Outline from "@/components/ui/outline";
import { cn } from "@/lib/utils";
import { useState } from "react";

const Describe = () => {
  const details = ["programming", "creative", "entrepreneur", "others"];
  const [selectedIndex, setselectedIndex] = useState<null | number>(null);
  return (
    <div className="pt-12 h-dvh flex flex-col justify-between items-center pb-4 px-4 ">
      <Heading>Describe Yourself</Heading>
      <ul className="space-y-5 w-full">
        {details.map((option, index) => (
          <li key={index}>
            <Outline
              onClick={() => {
                setselectedIndex(index);
              }}
              className={cn(
                "  capitalize shadow-none font-PlusJakartaSans p-5 ring-[1px] rounded-2xl ring-black text-[rgba(120,120,120,1)] font-semibold  flex justify-start items-center gap-5",
                selectedIndex === index
                  ? "ring-primary ring-1 text-black"
                  : "border-[rgba(0,0,0,1)]"
              )}
            >
              <img
                className={cn(
                  "w-16 h-16 grayscale",
                  selectedIndex === index && "grayscale-0"
                )}
                src={`/describe/${option}.webp`}
                alt={`/describe/${option}.webp`}
              />
              {option}
            </Outline>
          </li>
        ))}
      </ul>
      <Button
        size={"lg"}
        className="rounded-full w-full p-6 font-normal font-PlusJakartaSans my-2 "
        type="submit"
        onClick={() => {}}
      >
        Continue
      </Button>
    </div>
  );
};

export default Describe;
