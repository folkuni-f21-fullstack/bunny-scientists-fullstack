import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
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
    // omit existing reducers here
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMenu.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched posts to the array
        state.menu = action.payload
      })
      .addCase(fetchMenu.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})