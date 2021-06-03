import React, { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface TodoFormProps {
  onSubmit: (todo) => void;
}

const TodoForm = ({ onSubmit }: TodoFormProps): JSX.Element => {
  const [value, setValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void =>
    setValue(event.target.value);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    event.stopPropagation();
    onSubmit({
      id: uuidv4(),
      text: value,
      isComplete: false,
    });
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={value}
        onChange={handleChange}
      />
    </form>
  );
};

export default TodoForm;
