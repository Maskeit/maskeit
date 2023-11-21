import React, { useState } from 'react';
import '../styles/Aboutme.css';
import { Personal } from './aboutmeComponents/Personal';
import { Charlas } from './aboutmeComponents/Charlas';
import { Blender } from './aboutmeComponents/Blender';

import {
  Typography,
} from "@material-tailwind/react";


export const Titles = ({prop}) =>{
  return(
      <div className='about-h1'>
          <Typography variant='h1'>
                  <h1>{prop}</h1>            
          </Typography>
      </div>
  );
}


export const Aboutme = () => {

  return (
      <div className="Aboutme">
        <Personal />

        <Charlas />
        
        <Blender />
      </div>
  );
};
