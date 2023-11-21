import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Aboutme } from "./components/Aboutme";
import { Projects } from "./components/Projects";
import { useState } from "react";


export const App = () => {

  return (
    <div className="App" >
        <section className="Header">
          <Header/>
        </section>
        <section id="Hero-id">
          <Hero/>
        </section>
        <section id="Aboutme-id">
          <Aboutme/>
        </section>
    </div>
  );
};

export default App;
