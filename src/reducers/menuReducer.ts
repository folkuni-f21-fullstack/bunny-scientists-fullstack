import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { MenuCategory } from '../models/data';



// import { client } from '../../api/client'
type fetchMenu = {
  menu: MenuCategory[],
  status: string, 
  error: null
}
const initialState: fetchMenu = {
  menu: [],
  status: 'idle',
  error: null
}

export const fetchMenu = createAsyncThunk('api/menu', async () => {
  const response = await fetch("/api/menu", {
    mode: "cors",
  });
 console.log(response.json())
  const data: any[] = await response.json();
  console.log(data);
  return data

  
  // state.menu = data
})

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    fetchMenuSuccess: (state: fetchMenu, action: PayloadAction<MenuCategory[]>) => {
      const menu = action.payload
      console.log(action.payload)
      state.menu = menu
      return state
    }
  }
})

export default menuSlice.reducer;
export const {
  fetchMenuSuccess,
} = menuSlice.actions;