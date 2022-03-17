import { createSlice } from "@reduxjs/toolkit"

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    likes: 0,
    comments: 0,
  },
  reducers: {
    incrementLike: (state) => {
      state.likes += 1
    },
    incrementComment: (state) => {
      state.comments += 1
    },
  },
})

export const { incrementComment, incrementLike } = counterSlice.actions

export default counterSlice.reducer