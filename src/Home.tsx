import React from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import { TodoList } from "./components/todo";

const Home: React.FC = (props): JSX.Element => {
  return (
    <>
      <section className="todoapp">
        <Header />
        <TodoList />
      </section>
      <Footer />
    </>
  );
};

export default Home;
