import { Button } from "@/components/ui/button";
import PageHead from "@/components/ui/pageHead";
import { Clock, MapPin } from "lucide-react";

interface JobCardProps {
  logo?: string;
  title: string;
  company: string;
  description: string;
  isPartTime?: boolean;
  isRemote?: boolean;
  onApply?: () => void;
}

const JobCard: React.FC<JobCardProps> = ({
  logo = "G",
  title,
  company,
  description,
  isPartTime = true,
  isRemote = true,
  onApply = () => {},
}) => {
  return (
    <div className="p-3 py-4 rounded-2xl border border-[#787878] max-w-md bg-white text-[#787878] ">
      <div className="flex items-start gap-3 mb-3">
        {/* Logo */}
        <img height={45} width={45} src={logo} alt="" />

        {/* Title and Company */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          <p className="text-gray-600">{company}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-[#787878] mb-4 text-sm w-full h-16 text-ellipsis ... overflow-clip">
        {description}
      </p>

      {/* Bottom section with tags and button */}
      <div className="flex items-center justify-between">
        <div className="flex gap-8">
          {isPartTime && (
            <div className="flex flex-col items-start gap-3 text-gray-600 text-sm">
              <Clock size={20} />
              Part-time
            </div>
          )}
          {isRemote && (
            <div className="flex flex-col items-start gap-3 text-gray-600 text-sm">
              <MapPin size={20} />
              Remote
            </div>
          )}
        </div>

        <Button
          onClick={onApply}
          size={"lg"}
          className="rounded-full px-12 py-2"
        >
          Apply
        </Button>
      </div>
    </div>
  );
};

const Opportunities = () => {
  const opportunities = [
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjzC2JyZDZ_RaWf0qp11K0lcvB6b6kYNMoqtZAQ9hiPZ4cTIOB",
      title: "Content Writer",
      company: "Google",
      description:
        "Google's part-time content writer positions offer a unique opportunity to flex your writing skills while collaborating with a global tech giant. You'll craft engaging content that informs, educ...",
      tags: [
        {
          name: "Part-time",
          icon: "Clock",
        },
        "Remote",
      ],
      actionButton: "Apply",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjzC2JyZDZ_RaWf0qp11K0lcvB6b6kYNMoqtZAQ9hiPZ4cTIOB",
      title: "Content Writer",
      company: "Google",
      description:
        "Google's part-time content writer positions offer a unique opportunity to flex your writing skills while collaborating with a global tech giant. You'll craft engaging content that informs, educ...",
      tags: [
        {
          name: "Part-time",
          icon: "Clock",
        },
        "Remote",
      ],
      actionButton: "Apply",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      title: "Software Engineer",
      company: "Microsoft",
      description:
        "We are seeking a talented and passionate Software Engineer to join our dynamic team. In this role, you will be responsible for designing, developing, and maintaining high-quality software solutions. You will work closely with cross-functional teams to deliver innovative products that meet the evolving needs of our customers.",
      tags: [
        {
          name: "Part-time",
          icon: "Clock",
        },
        "Remote",
      ],
      actionButton: "Apply",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjzC2JyZDZ_RaWf0qp11K0lcvB6b6kYNMoqtZAQ9hiPZ4cTIOB",
      title: "Technical Writer",
      company: "Google",
      description:
        "We are seeking a skilled and detail-oriented Technical Writer to join our growing team. In this role, you will be responsible for creating high-quality technical documentation that is clear, concise, and easy to understand. You will work closely with software engineers, product managers, and other stakeholders to ensure that our documentation meets the needs of our users.",
      tags: [
        {
          name: "Part-time",
          icon: "Clock",
        },
        "Remote",
      ],
      actionButton: "Apply",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjzC2JyZDZ_RaWf0qp11K0lcvB6b6kYNMoqtZAQ9hiPZ4cTIOB",
      title: "Content Writer",
      company: "Google",
      description:
        "Google's part-time content writer positions offer a unique opportunity to flex your writing skills while collaborating with a global tech giant. You'll craft engaging content that informs, educates, and inspires users across a variety of platforms and products. It's a chance to work on challenging projects, learn from industry leaders, and contribute to a product used by billions worldwide.",
      tags: [
        {
          name: "Part-time",
          icon: "Clock",
        },
        "Remote",
      ],
      actionButton: "Apply",
    },
  ];

  return (
    <div className="min-h-dvh bg-white text-black px-4 py-6 space-y-4">
      <PageHead title="Opportunities" />
      <div className="space-y-5 pt-6">
        {opportunities.map((opportunity, index) => (
          <JobCard
            key={index}
            logo={opportunity.logo}
            title={opportunity.title}
            company={opportunity.company}
            description={opportunity.description}
            isPartTime={true}
            isRemote={true}
            onApply={() => alert("Applied!")}
          />
        ))}
      </div>
    </div>
  );
};

export default Opportunities;
