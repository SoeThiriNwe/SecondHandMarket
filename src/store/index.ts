import { configureStore } from '@reduxjs/toolkit'
import loginReducder from "./slice/loginSlice"
import categoryReducer from "./slice/categorySlice"

export const store = configureStore({
  reducer: {
    loginSliceReducer : loginReducder,
    categorySliceReducer : categoryReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch