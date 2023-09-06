import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "../store";

interface TodosState {
  items: Todo[];
}

const initialState: TodosState = {
  items: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ title: string }>) => {
      const newTodo: Todo = {
        checked: false,
        id: uuidv4(),
        title: action.payload.title,
      };
      state.items.unshift(newTodo);
    },
    removeTodo: (state, action: PayloadAction<{ id: string }>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    updateTodo: (
      state,
      action: PayloadAction<{ id: string; checked?: boolean; title?: string }>
    ) => {
      const { id, checked, title } = action.payload;
      const todo = state.items.find((item) => item.id === id);
      if (todo) {
        todo.checked = checked ?? todo.checked;
        todo.title = title ?? todo.title;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todosSlice.actions;

export const selectTodos = (state: RootState) => state.todos.items;