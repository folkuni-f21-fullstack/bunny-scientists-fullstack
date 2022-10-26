import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'

// import { client } from '../../api/client'

const initialState = {
  menu: [],
  status: 'idle',
  error: null
}

export const fetchMenu = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetch("/api/menu", {
    mode: "cors",
  });
  const data: any[] = await response.json();
  return data
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
        state.menu = state.menu.concat(action.payload)
      })
      .addCase(fetchMenu.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})