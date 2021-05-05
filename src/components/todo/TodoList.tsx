import React from "react";
import { useRecoilValue } from "recoil";

const TodoList: React.FC = (props): JSX.Element => {
  return (
    <section className="main">
      <ul className="todo-list"></ul>
    </section>
  );
};

export default TodoList;
