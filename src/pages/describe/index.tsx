import { Button } from "@/components/ui/button";
// import Outline from "@/components/ui/outline";

const Describe = () => {
  return (
    <div className="pt-12 h-full flex flex-col justify-between pb-4">
      <h2 className="font-PlusJakartaSans font-bold text-2xl tracking-tight">
        Describe yourself
      </h2>
      <ul className="space-y-5">
        {/* {currentQuestion.options.map((option, index) => (
      <li key={index}>
        <Outline
          onClick={() => {
            setselectedIndex(index);
          }}
          className={cn(
            "text-lg shadow-none font-PlusJakartaSans p-5 rounded-2xl text-[rgba(120,120,120,1)] font-semibold border-[0.05px]  border-[rgba(0,0,0,1)]",
            selectedIndex === index
              ? "border-primary border-2 text-black"
              : "border-[rgba(0,0,0,1)]"
          )}
        >
          {option}
        </Outline>
      </li>
    ))} */}
      </ul>
      <Button
        size={"lg"}
        className="rounded-full w-full p-6 font-normal font-PlusJakartaSans my-2 "
        type="submit"
        onClick={() => {}}
      >
        Next
      </Button>
    </div>
  );
};

export default Describe;
