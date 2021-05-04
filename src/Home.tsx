import React from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";

const Home: React.FC = (props): JSX.Element => {
  return (
    <>
      <section className="todoapp">
        <Header />
      </section>
      <Footer />
    </>
  );
};

export default Home;
