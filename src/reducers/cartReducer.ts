// const reducer = (state, action) => {
//     switch (action.type) {
//         case "decrease":
//             return state - action.payload;
//             case "increase":
//                 return state + action.payload
//     }
// }

// export default reducer
import { CartItem } from "../models/data";
import { createSlice } from "@reduxjs/toolkit";
const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state = [...state, action.payload];
    },
  },
});

export default cartSlice.reducer;
