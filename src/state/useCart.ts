import { create } from "zustand";

type Item = {
  id : number;
  name : string;
  price : number;
}
type CartStore = {
  cart : Item[];
  countCart : number;
  addToCart : (item : Item) => void;
}
export const useCart = create<CartStore>((set) => {
  return {
    cart : [],
    countCart : 0,
    addToCart: (item) => set((state) => {
      const updatedCart = [...state.cart, item];
      return { cart: updatedCart, countCart: updatedCart.length };
    }),
  }
})