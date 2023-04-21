import {create} from "zustand";

type GithubStore = {
  username: string;
  setUsername: (username: string) => void;
};

export const useGithubStore = create<GithubStore>((set) => ({
  username: "",
  setUsername: (username: string) => set({ username }),
}));
