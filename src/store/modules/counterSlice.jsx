import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  likes: 0,
  comments: 0,
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
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