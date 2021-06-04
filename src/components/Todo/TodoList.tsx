import React from "react";

import Todo from "./Todo";
import { useAppSelector, useAppDispatch } from "../../hooks";
import {
  selectTodoList,
  removeTodo,
  updateTodo,
  toggleTodoCompletion,
  selectTodoListCounts,
} from "../../store/slices/todosSlice";
import TodoListFooter from "./TodoListFooter";

const TodoList = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const todoList = useAppSelector(selectTodoList);
  const { totalTodos } = useAppSelector(selectTodoListCounts);

  return (
    <>
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
              toggleCompletion={() => dispatch(toggleTodoCompletion(id))}
            />
          ))}
        </ul>
      </section>
      {totalTodos > 0 && <TodoListFooter />}
    </>
  );
};

export default TodoList;
