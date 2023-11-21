import React from 'react'
import "./Blender.css"

import img1 from "../../images/render/MolinoWallpaper.png";
import img2 from "../../images/render/ocean.PNG";
import img3 from "../../images/render/xswing.PNG";
import img4 from "../../images/render/portada.png";
import img5 from "../../images/render/taza_blaster.png";
import img6 from "../../images/render/planetLava2CEvee.png";

import { Titles } from '../Aboutme';

export const Blender = () =>{
    const label = "Blender";
    return(
        <div>
            <Titles prop={label}/>
            <div className='content-blender'>
                <div className='columnas'>
                    <img src={img1}/>
                    <img src={img2}/>
                    <img src={img3}/>
                    <img src={img4}/>
                    <img src={img5}/>
                    <img src={img6}/>
                </div>
            </div>
            
        </div>
    );
}