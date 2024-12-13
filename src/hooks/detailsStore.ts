import { create } from "zustand";

interface userDetails {
  type: string;
  intrests: string[];
}

type Store = {
  details: userDetails;
  types_of_people: string[];
  setDetails: () => void;
};

const useDetailsStore = create<Store>()((set) => ({
  details: {
    type: "",
    intrests: [],
  },
  types_of_people: ["Programming", "Creative", "Entrepreneur", "Others"],
  setDetails: () =>
    set((state) => {
      return state;
    }),
}));

export default useDetailsStore;
