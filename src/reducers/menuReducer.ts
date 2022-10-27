import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { MenuCategory } from '../models/data';

export type FetchMenu = {
  menu: MenuCategory[],
  status: string, 
  error: null
}
const initialState: FetchMenu = {
  menu: [],
  status: 'idle',
  error: null
}

export const fetchMenuThunk = createAsyncThunk('api/menu', async () => {
  const response = await fetch("/api/menu", {
    mode: "cors",
  });
  const data: MenuCategory[] = await response.json();
  return data
})

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: { //Ändra namn
    fetchMenu: (state: FetchMenu, action: PayloadAction<MenuCategory[]>) => {
      const menu: MenuCategory[] = action.payload
      console.log(action.payload)
      let stateCopy = {...state}
      stateCopy.menu = menu //kopiera
      return stateCopy
    }
  }
})

export default menuSlice.reducer;
export const {
  fetchMenu,
} = menuSlice.actions;