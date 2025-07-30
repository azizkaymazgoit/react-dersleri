import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import cuzdanReducer2 from "./cuzdanSlice";

export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
    cuzdan: cuzdanReducer2,
  },
});
