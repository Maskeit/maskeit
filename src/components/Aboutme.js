import React, { Component, useEffect, useState } from 'react'
import myImage from '../images/yo.JPG';
import { cardButton } from './Items';
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
  Card
} from "@material-tailwind/react";


export const Personal = () =>{
    return(
        <div className="container scroll">
            <div className="content">
                <div className="img image-one"></div>
                <div className="card">
                    <h2>Gustos</h2>
                    <p className="text">Me gusta tocar el bajo, a veces produzco mi propia musica.</p>
                </div>
            </div>

            <div className="content">
                <div className="img image-two"></div>
                <div className="card">
                    <h2>Pasatiempos</h2>
                    <p className="text">Me gusta hacer modelos en 3D en blender</p>        
                </div>
            </div>
        </div>
    );
}




export const Aboutme = () => {


  return (
    <div>
        <div className="container">
            <Typography variant='h1'>
                <div className="sobremi">
                    <h1>Un Poco Sobre Mi</h1>
                </div>
            </Typography>
        </div>

        <div className="empty-space">
            <p className="intro">
            Soy un desarrollador de software apasionado 
            por la creación de soluciones innovadoras y eficientes. 
            Cuento con experiencia en el diseño y desarrollo de 
            aplicaciones web y de escritorio, así como en la creación de 
            modelos 3D.
            </p>
        </div>


        <Personal/>
    
        <Typography variant='h1'>
                <div className="sobremi">
                    <h1>Mi Trabajo</h1>
                </div>
        </Typography>

    </div>
    
  )
}
