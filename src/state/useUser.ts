import { create } from "zustand";

interface IUser {
  user: { name: string, location: string};
}
export const useUser = create<IUser>((set) => {
  return {
    user: {
      name: "Jonh",
      location : "Rua Padre Sá, 356"
    },
  };
});
