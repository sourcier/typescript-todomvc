import React from "react";
import { useRecoilValue } from "recoil";
import { todoListState } from "../../libs/recoil/atoms/todo";
import Todo from "./Todo";

const TodoList: React.FC = (props): JSX.Element => {
  const todoList = useRecoilValue(todoListState);
  console.log(todoList);

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
