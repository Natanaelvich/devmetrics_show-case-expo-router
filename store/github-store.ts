import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import zustandStorage from "./middleware-persist";

type GithubStore = {
  username: string;
  setUsername: (username: string) => void;
};

export const useGithubStore = create(
  persist<GithubStore>(
    (set) => ({
      username: "",
      setUsername: (username: string) => set({ username }),
    }),
    {
      name: "github-storage",
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);
