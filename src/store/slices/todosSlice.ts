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
  },
});

export const { addTodo } = counterSlice.actions;

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

export default counterSlice.reducer;
