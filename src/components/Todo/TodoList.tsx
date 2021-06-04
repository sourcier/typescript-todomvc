import React from "react";

import Todo from "./Todo";
import { useAppSelector } from "../../hooks";
import { selectTodoList } from "../../store/slices/todosSlice";

const TodoList = (): JSX.Element => {
  const todoList = useAppSelector(selectTodoList);

  return (
    <section className="main">
      <ul className="todo-list">
        {todoList.map(({ id, text, isComplete }) => (
          <Todo key={id} text={text} isComplete={isComplete} />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
