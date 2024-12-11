import { create } from "zustand";

type Question = {
  question: string;
  options: string[];
  selected: number | null;
  completed?: boolean;
};

type Store = {
  questions: Question[];
  currentQuestionIndex: number;
  setSelectedOption: (index: number, option: number) => void;
  nextQuestion: () => void;
};

const useQuestionStore = create<Store>((set) => ({
  questions: [
    {
      question: "What excites you the most?",
      options: [
        "Solving Problems",
        "Creating new things",
        "Learning new skills",
        "Collaborating with others",
      ],
      selected: null,
      completed: false,
    },
    {
      question: "What do you want to build?",
      options: [
        "Helpful tools",
        "Innovative products",
        "Complex systems",
        "Amazing teams",
      ],
      selected: null,
      completed: false,
    },
    {
      question: "What's your long-term tech goal?",
      options: [
        "Expertise",
        "Positive impact",
        "Entrepreneurship",
        "Exploration",
      ],
      selected: null,
      completed: false,
    },
  ],
  currentQuestionIndex: 0,
  setSelectedOption: (index, option) =>
    set((state) => {
      const questions = [...state.questions];
      questions[index].selected = option;
      questions[index].completed = true;
      return { questions };
    }),
  nextQuestion: () =>
    set((state) => {
      const nextIndex = state.currentQuestionIndex + 1;
      return {
        currentQuestionIndex:
          nextIndex < state.questions.length
            ? nextIndex
            : state.currentQuestionIndex,
      };
    }),
}));

export default useQuestionStore;
