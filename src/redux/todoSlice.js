import { createSlice } from "@reduxjs/toolkit";

const todoList = [
  { id: 1, text: "Kitap Oku 2", tamamlandi: false },
  { id: 2, text: "Redux Öğren", tamamlandi: true },
];

const todoSlice = createSlice({
  name: "todo",
  initialState: todoList,
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload,
        tamamlandi: false,
      });
    },
    updateTodo: (state, action) => {
      const tiklanan = state.find((todo) => todo.id === action.payload);
      if (tiklanan) {
        tiklanan.tamamlandi = !tiklanan.tamamlandi;
      }
    },
    deleteTodo: () => {},
  },
});

export const { addTodo, updateTodo } = todoSlice.actions;
export default todoSlice;
