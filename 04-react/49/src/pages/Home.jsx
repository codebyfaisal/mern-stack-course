import React, { useContext } from "react";
import Card from "../Card";
import { Hero } from "../components/home/Hero";
import Categories from "../components/home/Categories";
import Services from "../components/home/Services";

// import { ThemeContext } from "./ThemeContext";

const Home = () => {
  // const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="home">
      <Hero />
      <Categories />
      <Services />
    </div>
  );
};

export default Home;

// src / App.jsx;
// src / indexedDB.css;
// src / main.jsx;

// src / components;
// src / pages;
