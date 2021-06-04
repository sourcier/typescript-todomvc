import React from "react";

import Todo from "./Todo";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { selectTodoList, removeTodo } from "../../store/slices/todosSlice";

const TodoList = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const todoList = useAppSelector(selectTodoList);

  return (
    <section className="main">
      <ul className="todo-list">
        {todoList.map(({ id, text, isComplete }) => (
          <Todo
            key={id}
            text={text}
            isComplete={isComplete}
            removeTodo={() => dispatch(removeTodo(id))}
          />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
