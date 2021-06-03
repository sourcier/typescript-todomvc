import React from "react";

interface TodoProps {
  text: string;
  isComplete: boolean;
}

const Todo = ({ isComplete, text }: TodoProps): JSX.Element => (
  <li>
    <div className="view">
      <input
        id="toggle"
        className="toggle"
        type="checkbox"
        checked={isComplete}
      />
      <label htmlFor="toggle">{text}</label>
      <button type="button" className="destroy" aria-label="Delete" />
    </div>
  </li>
);

export default Todo;
