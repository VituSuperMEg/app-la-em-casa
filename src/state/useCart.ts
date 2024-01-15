import { create } from 'zustand'

export interface Item {
  id: number
  name: string
  price: number
  complement: [{
    id: number
    name: string
    price: number
  }]
}
interface CartStore {
  cart: Item[]
  countCart: number
  totalPrice: number
  addToCart: (item: Item) => void
  removeToComplementeCart: (item: Item) => void
}
export const useCart = create<CartStore>((set) => {
  return {
    cart: [],
    countCart: 0,
    totalPrice: 0,
    addToCart: (item) => {
      set((state) => {
        const updatedCart = [...state.cart, ...item]
        const updatedTotalPrice = state.totalPrice + item.reduce((sum, item) => sum + (item.price || 0), 0)
        return { cart: updatedCart, countCart: updatedCart.length, totalPrice: updatedTotalPrice }
      })
    },
    removeToComplementeCart: (item) => {
      set((state) => {
        const filtered = state.cart.map((c) => {
          if (c.id === item.id) {
            const filteredComplement = c.complement.filter((comp) => comp.id !== item.id)
            return { ...c, complement: filteredComplement }
          } else {
            return c
          }
        })
        return { cart: filtered }
      })
    }
  }
})
