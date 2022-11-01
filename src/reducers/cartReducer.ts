import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { CartItem, MenuItem } from "../models/data";

const initialState: CartItem[] = JSON.parse(
  localStorage.getItem("cart") || "[]"
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: CartItem[], action: PayloadAction<MenuItem>) => {
      const itemInCart = state.find(
        (item) => item.menuItem.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.amount++;
        localStorage.setItem("cart", JSON.stringify(state));
      } else {
        const object: CartItem = { menuItem: action.payload, amount: 1 };
        state.push(object);
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
    restoreCart: (state: CartItem[], action: PayloadAction<CartItem[]>) => {
      const object: CartItem[] = [...action.payload]
      state = object
      return state
    },
    incrementQuantity: (state: CartItem[], action: PayloadAction<CartItem>) => {
      const item = state.find(
        (item) => item.menuItem.id === action.payload.menuItem.id
      );
      if (item) {
        item.amount++;
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
    decrementQuantity: (state: CartItem[], action: PayloadAction<CartItem>) => {
      const item = state.find(
        (item) => item.menuItem.id === action.payload.menuItem.id
      );
      if (item) {
        if (item.amount === 1) {
          const removeItem = state.filter(
            (item) => item.menuItem.id !== action.payload.menuItem.id
          );
          state = removeItem;
          localStorage.setItem("cart", JSON.stringify(state));
          return state;
        } else {
          item.amount--;
          localStorage.setItem("cart", JSON.stringify(state));
        }
      }
    },
    removeItem: (state: CartItem[], action: PayloadAction<CartItem>) => {
      const removeItem = state.filter(
        (item) => item.menuItem.id !== action.payload.menuItem.id
      );
      state = removeItem;
      localStorage.setItem("cart", JSON.stringify(state));
      return state;
    },
    removeAll: (state: CartItem[]) => {
      localStorage.setItem("cart", JSON.stringify([]));
      return [];
    },
  },
});

export default cartSlice.reducer;

export const {
  restoreCart,
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  removeAll,
} = cartSlice.actions;
