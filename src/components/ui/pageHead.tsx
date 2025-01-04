import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PageHead = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  const navigate = useNavigate();

  return (
    <div className={cn("relative text-xl font-bold text-center ", className)}>
      <ChevronLeft
        className="absolute top-1/2 left-0 -translate-y-1/2"
        onClick={() => navigate(-1)}
      />
      <h1 className="capitalize">{title}</h1>
    </div>
  );
};

export default PageHead;
