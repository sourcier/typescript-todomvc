import React from "react";
import { TodoProps } from "./Todo.d";

const Todo: React.FC<TodoProps> = ({ id, isComplete, text }): JSX.Element => {
  return (
    <li>
      <div className="view">
        <input className="toggle" type="checkbox" checked={isComplete} />
        <label>{text}</label>
        <button className="destroy" />
      </div>
    </li>
  );
};

export default Todo;
