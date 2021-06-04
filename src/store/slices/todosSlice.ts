import { v4 as uuidv4 } from "uuid";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";

// Define a type for the slice state
interface TodoState {
  items: Todo[];
  filter: string;
}

// Define the initial state using that type
const initialState: TodoState = {
  items: [],
  filter: "All",
};

export const counterSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.items.push({
        id: uuidv4(),
        text: action.payload,
        isComplete: false,
      });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (
      state,
      { payload: { id, text } }: PayloadAction<{ id: string; text: string }>
    ) => {
      state.items = state.items.map((todo) =>
        todo.id === id ? { ...todo, text } : todo
      );
    },
    toggleTodoCompletion: (state, action: PayloadAction<string>) => {
      state.items = state.items.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isComplete: !todo.isComplete }
          : todo
      );
    },
  },
});

export const selectTodoList = (state: RootState) => {
  const { filter, items } = state.todos;

  switch (filter) {
    case "Completed":
      return items.filter(({ isComplete }) => isComplete);
    case "Active":
      return items.filter(({ isComplete }) => !isComplete);
    default:
      return items;
  }
};

export const selectTodoListCounts = (state: RootState) => {
  const { items } = state.todos;

  return {
    totalTodos: items.length,
    totalCompleted: items.filter(({ isComplete }) => isComplete).length,
    totalUncompleted: items.filter(({ isComplete }) => !isComplete).length,
  };
};

export const { addTodo, removeTodo, updateTodo, toggleTodoCompletion } =
  counterSlice.actions;

export default counterSlice.reducer;
