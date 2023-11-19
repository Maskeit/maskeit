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


    export const Titles = ({prop}) =>{
        return(
            <div>
                <Typography variant='h1'>
                    <div className="About-titles">
                        <h1>{prop}</h1>
                    </div>
                </Typography>
            </div>
        );
    }

export const Personal = () =>{

    const label = "Un Poco Sobre Mi";
    return(
        <div className='personal-container'>
            <Titles prop={label}/>
            <div className="empty-space">
                <p className="intro">
                Soy un desarrollador de software apasionado 
                </p>
            </div>
            <div className="container personal">
                <div className="card">
                    <div className="img image-one"></div>
                    <div className="content">
                        <h2>Modelado en 3D</h2>
                        <p className="text">He dado multiples charlas sobre la inteligencia artificial, me gusta compartir conocimiento sobre nuevas tecnologias.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="img image-two"></div>
                    <div className="content">
                        <h2>Reconocimiento de imagenes</h2>
                        <p className="text">Algunas de las tecnologias revolucionarias sobre el reconocimiento de imagenes</p>        
                    </div>
                </div>
            </div>
        </div>
    );
}

export const Charlas = () =>{
    const label = "Charlas";
    return(
        <div className='charlas-container'>
            <Titles prop={label}/>
            <div className="empty-space">
                <div className="intro-container">
                    <p className="intro">
                        Soy un desarrollador de software
                    </p>
                </div>
            </div>

            <div className="container charlas">
                <div className="card">
                    <div className="img image-one"></div>
                    <div className="content">
                        <h2>Modelado en 3D</h2>
                        <p className="text">He dado multiples charlas sobre la inteligencia artificial, me gusta compartir conocimiento sobre nuevas tecnologias.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="img image-two"></div>
                    <div className="content">
                        <h2>Reconocimiento de imagenes</h2>
                        <p className="text">Algunas de las tecnologias revolucionarias sobre el reconocimiento de imagenes</p>        
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Blender = () =>{
    const label = "Blender";
    return(
        <div className='blender-container'>
            <Titles prop={label}/>
            <div className="empty-space">
                <p className="intro">
                Soy un desarrollador de software apasionado 
                </p>
            </div>
            <div className="container blender">
                <div className="card">
                    <div className="img image-one"></div>
                    <div className="content">
                        <h2>Modelado en 3D</h2>
                        <p className="text">He dado multiples charlas sobre la inteligencia artificial, me gusta compartir conocimiento sobre nuevas tecnologias.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="img image-two"></div>
                    <div className="content">
                        <h2>Reconocimiento de imagenes</h2>
                        <p className="text">Algunas de las tecnologias revolucionarias sobre el reconocimiento de imagenes</p>        
                    </div>
                </div>
            </div>
        </div>
    );
}


export const Aboutme = () => {
  return (
    <div className='AboutmeAll'>
        <Personal/>
        <Charlas/>
        <Blender/>
    </div>    
  )
}
