import React, { useState } from 'react'
import "./Blender.css"
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Avatar,
    IconButton,
    Typography,
    Card,
  } from "@material-tailwind/react";
import img1 from "../../images/render/MolinoWallpaper.png";
import img2 from "../../images/render/ocean.PNG";
import img3 from "../../images/render/xswing.PNG";
import img4 from "../../images/render/portada.png";
import img5 from "../../images/render/taza_blaster.png";
import img6 from "../../images/render/planetLava2CEvee.png";

import { Titles } from '../Aboutme';

export const DialogWithImage = ({prop}) =>{
    const [open, setOpen] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
   
    const handleOpen = () => setOpen((cur) => !cur);
    const handleIsFavorite = () => setIsFavorite((cur) => !cur);
   
    
    return (
    <div>
      <Card
        className="h-64 w-96 cursor-pointer overflow-hidden transition-opacity hover:opacity-90 img-blender"
        onClick={handleOpen}
      >
        <img
          alt="blender-img"
          className="object-cover object-center"
          src={prop}
        />
      </Card>
       <Dialog size="md" open={open} handler={handleOpen}>
        <DialogHeader className="justify-between">
          <div className="flex items-center gap-3">
            <div className="-mt-px flex flex-col">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-medium"
              >
                Miguel Alejandre
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="text-xs font-normal"
              >
                @maskeit
              </Typography>
            </div>
          </div>
          <div className="flex items-center mr-3">
            <IconButton
              variant="text"
              size="sm"
              color={isFavorite ? "blue-gray" : "blue-gray"}
              onClick={handleIsFavorite}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </IconButton>
          </div>
        </DialogHeader>
        <DialogBody>
          <img
            alt="nature"
            className="h-66rem w-86 rounded-lg object-cover object-center"
            src={prop}
          />
        </DialogBody>
        <DialogFooter className="justify-between">
          <div className="grid items-center">
            <div>
              <Typography variant="small" color="gray" className="font-normal">
                MolinoWallpaper
              </Typography>
            </div>
          </div>
          <Button
            size="sm"
            variant="outlined"
            color="blue-gray"
            className="mr-0 grid items-center"
          >
            Visitar
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
    );
};


export const Blender = () =>{
    const label = "Blender";
    return(
        <div>
                
            <Titles prop={label}/>
            <div className='content-blender'>
                <div className="columnas">
                    <DialogWithImage prop={img3}/>
                    <DialogWithImage prop={img1}/>
                    <DialogWithImage prop={img2}/>
                    <DialogWithImage prop={img6}/>
                    <DialogWithImage prop={img4}/>
                    <DialogWithImage prop={img5}/>
                </div>
            </div>            
        </div>
    );
}