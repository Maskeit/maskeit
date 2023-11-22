import React, { useEffect } from "react";
import "./Hero.css";
import { Titles } from "../../components/Titles";

export const Letters = () => {
  useEffect(() => {
    console.log("Has cargado el componente");
  }, []);

  let letters = [
    "Bienvenido",
    "Mi nombre es Miguel",
    "Que tal"
  ];

  return (
    <div className="letters">
      <Titles prop={letters[2]} />
    </div>
  );
};

export const Presentation = () => {
  return (
    <div>
      <div className="presentation">
        <p>
          Soy Miguel Alejandre, Ingeniero de Software enfocado en soluciones
          innovadoras, desarrollo de aplicaciones, inteligencia artificial y
          reconocimiento de imágenes.
        </p>
      </div>
    </div>
  );
};

export const Hero = () => {
  return (
    <div className="Hero">
      {/* <div className="pulser-group">
        <div className="pulser"></div>
        <div className="pulser"></div>
        <div className="pulser"></div>
        <div className="pulser"></div>
      </div> */}
      <Letters />
      <Presentation />
    </div>
  );
};
