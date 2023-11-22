import React from "react";
import { Hero } from "./homeLayouts/Hero";
import { Personal } from "./homeLayouts/Personal";
import { Charlas } from "./homeLayouts/Charlas";


export const Home = () => {
  return (
    <div className="Home">
        <Hero />
        <Personal/>

    </div>
  );
};
