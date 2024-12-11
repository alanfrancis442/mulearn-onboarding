import { create } from "zustand";

interface userDetails {
  describe: string;
  intrests: string[];
}

type Store = {
  details: userDetails;
  setDetails: () => void;
};

const useDetailsStore = create<Store>()((set) => ({
  details: {
    describe: "",
    intrests: [],
  },
  setDetails: () =>
    set((state) => {
      return state;
    }),
}));

export default useDetailsStore;
