import { useNavigate } from "react-router-dom";
import { Button, ButtonProps } from "./ui/button";

const InterestGroupsData = [
  { label: "AI/ML", src: "/home/aiml.webp" },
  { label: "UI/UX", src: "/home/uiux.webp" },
  { label: "Cybersecurity", src: "/home/cyber.webp" },
  { label: "Android Development", src: "/home/android.webp" },
  { label: "Civil Engineering", src: "/home/civil.webp" },
  { label: "Digital Marketing", src: "/home/digital_markerting.webp" },
];

export const InterestGroups = ({
  className,
  buttonVariant,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  buttonVariant?: ButtonProps["variant"];
}) => {
  const navigate = useNavigate();
  return (
    <div className={`flex flex-col gap-6 ${className}`} {...props}>
      <div className="text-sm font-semibold">Your Interest Groups</div>
      <div className="grid grid-cols-3 gap-x-2 gap-y-4">
        {InterestGroupsData.map((data, index) => (
          <InterestGroupBox src={data.src} key={index}>
            {data.label}
          </InterestGroupBox>
        ))}
      </div>
      <Button
        size={"lg"}
        onClick={() => {
          navigate("/ig");
        }}
        variant={"outline"}
        className="rounded-full w-full p-6 font-PlusJakartaSans my-2 border-primary text-primary font-semibold"
        type="submit"
      >
        View All IGs
      </Button>
    </div>
  );
};

const InterestGroupBox = ({
  src,
  children,
  className,
  ...props
}: { src: string } & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-1 ${className}`}
      {...props}
    >
      <div className="w-[60px] h-[60px] bg-primary px-[14px] py-[11px] rounded-full overflow-hidden">
        <img src={src} alt="" />
      </div>
      <div className="text-sm text-center font-semibold text-[#787878] text-ellipsis truncate w-full">
        {children}
      </div>
    </div>
  );
};
