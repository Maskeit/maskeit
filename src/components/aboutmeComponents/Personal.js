import React, { Component, useEffect, useState } from 'react'
//import { motion } from "framer-motion";
import myImage from '../../images/yo.JPG';
import "./Personal.css"
import { Titles } from '../Aboutme';


export const CircularImg = () => {
  return (
    <img
      className="h-96 w-96 rounded-full object-cover object-center"
      src={myImage}
      alt="Miguel Image"
    />
  );
}
export const Personal = () => {

    const label = "Algo de mi";
    return (
      <div>
        <Titles prop={label} />
        <div className="content-personal">
          <div className="card-information-personal"> 
            <CircularImg/>
            <div className="card-info">
              <div className="content">
                <h2>Sobre mi</h2>
                <p className="text">
                  Apasionado por el software, la física, 
                  las matemáticas y la ciencia en general, 
                  además de ser un amante de la música, me comprometo a 
                  contribuir al avance del mundo mediante descubrimientos 
                  significativos en el ámbito científico y tecnológico. 
                  Como estudiante de ingeniería de software, me encuentro 
                  inmerso en el desarrollo continuo de tecnologías innovadoras, haciendo uso de la inteligencia artificial para mejorar la calidad de vida y abordar problemas sociales importantes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  