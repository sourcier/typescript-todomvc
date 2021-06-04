import React from "react";

interface TodoProps {
  text: string;
  isComplete: boolean;
  removeTodo: () => void;
}

const Todo = ({ isComplete, text, removeTodo }: TodoProps): JSX.Element => (
  <li>
    <div className="view">
      <input
        id="toggle"
        className="toggle"
        type="checkbox"
        checked={isComplete}
      />
      <label htmlFor="toggle">{text}</label>
      <button
        type="button"
        className="destroy"
        aria-label="Delete"
        onClick={removeTodo}
      />
    </div>
  </li>
);

export default Todo;
