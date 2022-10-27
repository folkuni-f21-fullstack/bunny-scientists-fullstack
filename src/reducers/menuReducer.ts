import type { AnyAction, PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { MenuCategory } from '../models/data';

type fetchMenuType = {
  menu: MenuCategory[],
  loading: 'idle' | 'pending' | 'succeeded' | 'failed',
  error: ''
}
type KnownError = {
  errorMessage: string
}
const initialState: fetchMenuType = {
  menu: [],
  loading: 'idle',
  error: ''
}
export const fetchMenu = createAsyncThunk('api/menu', async () => {
  const response = await fetch("http://localhost:5174/api/menu");
  const data: Promise<MenuCategory[]> = response.json();
  return data
})

// import { client } from '../../api/client'
const menuSlice = createSlice ({
  name: 'menu',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMenu.pending, (state) => {
      state.loading = 'pending'
    })
    builder.addCase(fetchMenu.fulfilled, (state, action) => {
      state.loading = 'succeeded'
      if(action.payload) {
        state.menu = action.payload
        return state
      }
    })
  }
})

export default menuSlice.reducer