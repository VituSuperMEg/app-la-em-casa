import { create } from "zustand";

type Item = {
  id : number;
  name : string;
  price : number;
  complement : [{
    id : number
    name : string;
    price : number;
  }];
}
type CartStore = {
  cart : Item[];
  countCart : number;
  totalPrice : number;
  addToCart : (item : Item) => void;
}
export const useCart = create<CartStore>((set) => {
  return {
    cart: [],
    countCart: 0,
    totalPrice: 0,
    addToCart: (item) => set((state) => {
      const updatedCart = [...state.cart, ...item];
      const updatedTotalPrice = state.totalPrice + item.reduce((sum, item) => sum + (item.price || 0), 0);
      return { cart: updatedCart, countCart: updatedCart.length, totalPrice: updatedTotalPrice };
    }),
  };
})