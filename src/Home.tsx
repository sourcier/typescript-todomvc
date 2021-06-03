import React from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import { TodoList } from "./components/Todo";

const Home: React.FC = (): JSX.Element => (
  <>
    <section className="todoapp">
      <Header />
      <TodoList />
    </section>
    <Footer />
  </>
);

export default Home;
