import React from "react";
import { TodoForm } from "./todo";

const Header: React.FC = (): JSX.Element => {
  return (
    <header className="header">
      <h1>todos</h1>
      <TodoForm onSubmit={() => {}} />
    </header>
  );
};

export default Header;
