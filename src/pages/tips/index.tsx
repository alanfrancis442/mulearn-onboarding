import useTipStore from "@/hooks/tipStore";

const Tips = () => {
  const { currentTipIndex, tips } = useTipStore();
  return (
    <div className="flex flex-col gap-16 items-center font-PlusJakartaSans">
      <div className="flex flex-col gap-4 items-center pt-5">
        <h2 className="text-center font-bold text-base tracking-tight">
          Tips that help you on the way
        </h2>
        <h1 className="text-xl font-bold">{tips[currentTipIndex].title}</h1>
      </div>
      <img src={tips[currentTipIndex].imgUrl} alt="" height={500} width={500} />
      <p className=" text-sm"> {tips[currentTipIndex].description}</p>
    </div>
  );
};

export default Tips;
