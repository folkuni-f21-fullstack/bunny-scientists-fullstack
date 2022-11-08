import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { MenuCategory } from '../models/data';

type fetchMenuType = {
  menu: MenuCategory[],
  loading: 'idle' | 'pending' | 'succeeded' | 'failed',
  error: string
}
const initialState: fetchMenuType = {
  menu: [],
  loading: 'idle',
  error: ''
}

export const fetchMenu = createAsyncThunk('api/menu', async () => {
  const response = await fetch("/api/menu");
  const data: Promise<MenuCategory[]> = response.json();
  return data
})

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMenu.pending, (state) => {
      state.loading = 'pending'
    })
    builder.addCase(fetchMenu.fulfilled, (state, action) => {
      state.loading = 'succeeded'
      const menu: MenuCategory[] = action.payload
      let stateCopy = { ...state }
      stateCopy.menu = menu //kopiera
      state.menu = menu
    })
    builder.addCase(fetchMenu.rejected, (state, action) => {
      state.loading = 'failed'
      const menu: MenuCategory[] = []
      let stateCopy = { ...state }
      stateCopy.menu = menu //kopiera
      state.menu = menu
      if (typeof action.error.message === "string") {
        state.error = action.error.message
      }
    })
  }
})

export default menuSlice.reducer