import React from "react";
import { TodoForm } from "./Todo";

const Header: React.FC = (): JSX.Element => (
  <header className="header">
    <h1>todos</h1>
    <TodoForm />
  </header>
);

export default Header;
