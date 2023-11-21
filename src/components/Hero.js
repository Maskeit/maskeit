import React, { Component, useEffect, useState } from 'react'
import myImage from '../images/yo.JPG';
import "../styles/Hero.css";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
  Card
} from "@material-tailwind/react";




export const Letters  = () => {
  useEffect(()=>{
    console.log("Has cargado el componente");
  },[]);

  let letters = [
    "Bienvenido",
    "Mi nombre es Miguel",
    "Que tal"
  ];

  return (
    <div> 
      <Typography variant='h1'>
      <div className="letters">
        <h2>{letters[0]}</h2>
        </div>
      </Typography>
    </div>
  );
}

export const Presentation = () =>{
  return(

    <div> 
      <div className="presentation">
        <p>Soy Miguel Alejandre, Ingeniero de Software enfocado en soluciones innovadoras, desarrollo de aplicaciones, inteligencia artificial y reconocimiento de imágenes.
        </p>
      </div>
    </div>
  );
}

export const Hero = () => {
  return (
    <div className="Hero" >
        <Letters/>
        <Presentation/>
    </div>
  );
}