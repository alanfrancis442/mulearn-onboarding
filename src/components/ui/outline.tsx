import { cn } from "@/lib/utils";

const Outline = ({
  className,
  children,
  onClick,
}: {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        " text-nowrap cursor-pointer flex min-h-9 w-full rounded-md ring ring-input bg-transparent px-3 py-1 text-base file:ring-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm shadow-none transition-all",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Outline;
