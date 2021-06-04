import React, { ChangeEvent, FormEvent, useState } from "react";

import { useAppDispatch } from "../../hooks";
import { addTodo } from "../../store/slices/todosSlice";

const TodoForm = (): JSX.Element => {
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void =>
    setValue(event.target.value);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(addTodo(value));
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
