import { create } from "zustand";

type tipProp = {
  index: number;
  title: string;
  imgUrl: string;
  description: string;
};

type TipStore = {
  tips: tipProp[];
  currentTipIndex: number;
  nextTip: () => void;
};

const useTipStore = create<TipStore>()((set) => ({
  tips: [
    {
      index: 1,
      title: "Karma Points",
      imgUrl: "/tips/karmatip.webp",
      description:
        "Want to level up your learning journey? Earn Karma Points by actively participating in discussions, completing challenges, and sharing your knowledge. Watch your Karma grow and unlock exciting rewards like exclusive content, internships, and mentorship opportunities!",
    },
    {
      index: 2,
      title: "Learning Circles",
      imgUrl: "/tips/lctip.webp",
      description:
        "Ready to learn with like-minded peers? Join a Learning Circle and dive deep into your favorite topics. Collaborate on projects, discuss ideas, and grow together. It's a fun and effective way to accelerate your learning journey!",
    },
    {
      index: 3,
      title: "Interest Groups",
      imgUrl: "/tips/igtip.webp",
      description:
        "Discover your passion and connect with like-minded individuals. Join an Interest Group and explore your interests with experts and peers. Collaborate on projects, share knowledge, and build a strong community.",
    },
    {
      index: 4,
      title: "Karma Rankings",
      imgUrl: "/tips/ranktip.webp",
      description:
        "Want to see how you stack up against your peers? Check out the Leaderboard and track your progress. Compete for top spots, earn rewards, and inspire others with your achievements.",
    },
  ],
  currentTipIndex: 0,
  nextTip: () => {
    set((state) => ({
      currentTipIndex: state.currentTipIndex + 1,
    }));
  },
}));

export default useTipStore;
