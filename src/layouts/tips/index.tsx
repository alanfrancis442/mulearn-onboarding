import { Button } from "@/components/ui/button";
import useTipStore from "@/hooks/tipStore";
import { Outlet, useNavigate } from "react-router-dom";

const TipsLayout = () => {
  const { currentTipIndex, tips, nextTip } = useTipStore();
  const navigate = useNavigate();
  return (
    <div className="px-4 py-8 bg-white flex flex-col justify-between gap-12 mb-16 h-dvh overflow-hidden font-PlusJakartaSans">
      <Outlet />
      <div className="flex flex-col gap-4 items-center">
        <Button
          size={"lg"}
          className="rounded-full w-full p-6 font-normal font-PlusJakartaSans "
          type="submit"
          onClick={() => {
            if (currentTipIndex === tips.length - 1) {
              navigate("/home");
              return;
            }
            nextTip();
          }}
        >
          Continue
        </Button>
        <Button
          size={"lg"}
          className="rounded-full w-full p-6 font-normal font-PlusJakartaSans text-primary bg-white shadow-none"
          type="submit"
          onClick={() => {
            navigate("/home");
          }}
        >
          Skip
        </Button>
      </div>
    </div>
  );
};

export default TipsLayout;
