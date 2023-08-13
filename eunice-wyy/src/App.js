import React from "react";

// My components
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
