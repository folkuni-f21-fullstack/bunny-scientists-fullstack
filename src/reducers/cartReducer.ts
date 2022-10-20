import { CartItem } from "../models/data";
import { createSlice } from "@reduxjs/toolkit";
const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.find((item) => item.menuItem.id === action.payload.id);
      if (itemInCart) {
        itemInCart.amount++
      } else {
        state.push({ ...action.payload, amount: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.find((item) => item.menuItem.id === action.payload)
      if (item) {
        item.amount++
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.find((item) => item.menuItem.id === action.payload)
      if (item) {
        if (item.amount === 1) {
          const removeItem = state.filter((item) => item.menuItem.id !== action.payload)
          state = removeItem
        } else {
          item.amount--
        }
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.filter((item) => item.menuItem.id !== action.payload)
      state = removeItem
    }
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} = cartSlice.actions;
