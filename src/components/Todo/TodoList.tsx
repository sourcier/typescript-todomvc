import React from "react";

import Todo from "./Todo";
import { useAppSelector, useAppDispatch } from "../../hooks";
import {
  selectTodoList,
  removeTodo,
  updateTodo,
} from "../../store/slices/todosSlice";

const TodoList = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const todoList = useAppSelector(selectTodoList);

  return (
    <section className="main">
      <ul className="todo-list">
        {todoList.map(({ id, text, isComplete }) => (
          <Todo
            key={id}
            id={id}
            text={text}
            isComplete={isComplete}
            removeTodo={() => dispatch(removeTodo(id))}
            updateTodo={(todo) => dispatch(updateTodo(todo))}
          />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
