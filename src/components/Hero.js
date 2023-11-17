import React, { Component, useEffect, useState } from 'react'
import myImage from '../images/yo.JPG';
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
  Card
} from "@material-tailwind/react";

export const CircularImg = () => {
    return (
      <img
        // className="h-96 w-96 rounded-full object-cover object-center"
        className="h-48 w-48 md:h-72 md:w-72 rounded-full object-cover object-center"
        src={myImage}
        alt="Miguel Image"
      />
    );
}


export const Letters  = () => {
  // useEffect(()=>{
  //   console.log("Has cargado el componente");
  // },[]);

  let letters = [
    "Bienvenido",
    "Mi nombre es Miguel"
  ];

  return (
    <div className="main-letters"> 
      <Typography variant='h1'>
      <div className="rotating-text-wrapper">
        <h2>{letters[1]}</h2>
      </div>
      </Typography>
    </div>
  );
}

export const Hero = () => {
  return (
    <div className="hero">
      <div className="name-img">      
        <Letters/>
      </div>
    </div>
  );
}