import React from 'react'
import {
    Typography,
  } from "@material-tailwind/react";

export const Titles = ({prop}) => {
    return(
    <Typography variant='h1'>
        <h1>{prop}</h1>            
    </Typography>
    );
}