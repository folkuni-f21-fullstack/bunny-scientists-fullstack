import type { AnyAction, PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { MenuCategory } from '../models/data';

type fetchMenuType = {
  menu: MenuCategory[],
  loading: 'idle' | 'pending' | 'succeeded' | 'failed',
}
type KnownError = {
  errorMessage: string
}
const initialState: fetchMenuType = {
  menu: [],
  loading: 'idle',
}
export const fetchMenu = createAsyncThunk('api/menu', async () => {
  const response = await fetch("/api/menu");
  if(response.status === 426) {
    return console.log(response)
  }
  return (await response.json()) as MenuCategory[]
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
      }
      console.log(action.payload)
    })
  }
})

export default menuSlice.reducer