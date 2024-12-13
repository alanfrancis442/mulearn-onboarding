import { cn } from "@/lib/utils";

type headingProps = {
  className?: string;
  children: React.ReactNode;
};

const Heading = ({ className, children }: headingProps) => {
  return (
    <div className={cn("relative mb-12", className)}>
      <img
        src="/common/planet.webp"
        alt=""
        height={50}
        width={50}
        className="absolute -top-6 -right-8"
      />
      <h1 className="font-PlusJakartaSans font-bold text-3xl">{children}</h1>
    </div>
  );
};

export default Heading;
