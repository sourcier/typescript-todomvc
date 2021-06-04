import React, { useState, useEffect, useRef } from "react";
import classnames from "classnames";

interface TodoProps {
  id: string;
  text: string;
  isComplete: boolean;
  removeTodo: () => void;
  updateTodo: (todo) => void;
  toggleCompletion: () => void;
}

const Todo = ({
  id,
  isComplete,
  text,
  removeTodo,
  updateTodo,
  toggleCompletion,
}: TodoProps): JSX.Element => {
  const [editing, setEdting] = useState(false);
  const [value, setValue] = useState(text);
  const textInput = useRef(null);

  const handleChange = (event) => setValue(event.target.value);
  const handleSubmit = () => {
    updateTodo({ id, text: value });
    setEdting(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === "Escape") {
      event.preventDefault();
      event.stopPropagation();
      handleSubmit();
    }
  };

  useEffect(() => {
    textInput.current.focus();
  });

  return (
    <li className={classnames({ completed: isComplete, editing })}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={isComplete}
          onChange={toggleCompletion}
        />
        <label onDoubleClick={() => setEdting(true)} htmlFor=".">
          {text}
        </label>
        <button
          type="button"
          aria-label="Delete"
          className="destroy"
          onClick={() => removeTodo()}
        />
      </div>
      <input
        className="edit"
        ref={textInput}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onBlur={handleSubmit}
      />
    </li>
  );
};

export default Todo;
