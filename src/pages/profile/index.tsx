import { PointsGroup } from "@/components/points";
import { ChevronLeft, EditIcon, Info, LogOut } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { TbCoins, TbLockOpen, TbTargetArrow } from "react-icons/tb";
import { LuCircleCheckBig } from "react-icons/lu";
import {
  IoIosNotificationsOutline,
  IoMdNotificationsOutline,
} from "react-icons/io";

const Profile = () => {
  const navigate = useNavigate();
  const profilePic = undefined;
  const name = "Edwin Emmanuel Roy";
  return (
    <div className="flex flex-col p-4 pt-6 gap-9">
      <ChevronLeft className="" onClick={() => navigate(-1)} />
      <div className="gap-4 flex-1 flex">
        <img
          src={profilePic || "/avathars/avathar1.webp"}
          alt=""
          height={60}
          width={60}
          className="overflow-hidden rounded-full bg-orange-300"
        />
        <div className="flex-1 flex flex-col gap-2">
          <div className="font-semibold text-xl">{name}</div>
          <div className="text-xs underline">View Public Profile</div>
        </div>
        <div className="">
          <EditIcon className=" text-primary" strokeWidth={1.5} />
        </div>
      </div>
      <PointsGroup
        scores={{
          karma: "24.56K",
          avg_karma: "2.59K",
          rank: "14458",
        }}
      />
      <div className="flex flex-col gap-6 ">
        {items.map((item, index) => (
          <ColorBox
            key={index}
            label={item.label}
            icon={item.icon}
            color={item.color}
          >
            {item?.children}
          </ColorBox>
        ))}
      </div>
      <ColorBox
        className="mt-12"
        label="Log Out"
        icon={<LogOut className="text-[#fc5e5e]" />}
        color="bg-[#FFC6C6]"
      />
    </div>
  );
};

export default Profile;

const ColorBox = ({
  children,
  label,
  icon,
  color,
  className,
  ...props
}: {
  label: string;
  icon: React.ReactNode;
  color: string;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) => {
  return (
    <div className={`${className} flex gap-4 items-center`} {...props}>
      <div
        className={`p-2 w-10 h-10 ${color} rounded-[8px] flex items-center justify-center`}
      >
        {icon}
      </div>
      <div className=" flex-1 font-semibold">{label}</div>
      {children}
    </div>
  );
};

const items = [
  {
    label: "Karma Points Transactions",
    icon: <TbCoins size={21} className="text-[#D4B000]" />, // Darker than bg-[#FFF5C1]
    color: "bg-[#FFF5C1]",
  },
  {
    label: "Change Career Path",
    icon: <TbTargetArrow size={21} className="text-[#E6A300]" />, // Darker than bg-[#FFDCC1]
    color: "bg-[#FFDCC1]",
    children: (
      <a className="text-xs underline text-primary">Software Engineer</a>
    ),
  },
  {
    label: "Learning Circle Attendance",
    icon: <LuCircleCheckBig size={21} className="text-[#8AB8E6]" />, // Darker than bg-[#C0E6FF]
    color: "bg-[#C0E6FF]",
  },
  {
    label: "Notifications",
    icon: <IoMdNotificationsOutline size={21} className="text-[#88BFA3]" />, // Darker than bg-[#BBFFD6]
    color: "bg-[#BBFFD6]",
  },
  {
    label: "Privacy and Security",
    icon: <TbLockOpen size={21} className="text-[#B38ABE]" />, // Darker than bg-[#ECCEFF]
    color: "bg-[#ECCEFF]",
  },
  {
    label: "FAQ and Support",
    icon: <Info size={21} className="text-[#C2E6A4]" />, // Darker than bg-[#EAFFB4]
    color: "bg-[#EAFFB4]",
  },
];
