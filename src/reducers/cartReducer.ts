import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from "@reduxjs/toolkit";
import { CartItem, MenuItem } from "../models/data";

const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: CartItem[], action: PayloadAction<MenuItem>) => {
      const itemInCart = state.find((item) => item.menuItem.id === action.payload.id);
      if (itemInCart) {
        itemInCart.amount++
      } else {
        const object:CartItem = {menuItem: action.payload, amount: 1}
        state.push(object);
      }
    },
    incrementQuantity: (state: CartItem[], action: PayloadAction<CartItem>) => {
      const item = state.find((item) => item.menuItem.id === action.payload.menuItem.id)
      if (item) {
        item.amount++
      }
    },
    decrementQuantity: (state: CartItem[], action: PayloadAction<CartItem>) => {
      const item = state.find((item) => item.menuItem.id === action.payload.menuItem.id)
      if (item) {
        if (item.amount === 1) {
          const removeItem = state.filter((item) => item.menuItem.id !== action.payload.menuItem.id)     
          state = removeItem
          return state
        } else {
          item.amount--
        }
      }
    },
    removeItem: (state: CartItem[], action: PayloadAction<CartItem>) => {
      const removeItem = state.filter((item) => item.menuItem.id !== action.payload.menuItem.id)
      state = removeItem
      return state
    },
    removeAll: (state: CartItem[]) => {
      state = []
      return state
    }
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  removeAll
} = cartSlice.actions;
