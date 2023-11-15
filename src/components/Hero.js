import React, { Component } from 'react'
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
        className="h-96 w-96 rounded-full object-cover object-center"
        src={myImage}
        alt="Miguel Image"
      />
    );
}

export const CardHero  = () => {
  return (
    <div className="mx-auto max-w-screen-md py-12">
    <Card className="mb-12 overflow-hidden">
      <img
        alt="nature"
        className="h-[32rem] w-full object-cover object-center"
        src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
      />
    </Card>
  </div>
  );
}

export const Hero = () => {
  return (
    <div className="hero">
      <div className="content-container">
        <div className="img-container">
          <CircularImg />
        </div>
        <div className="information">
          <Typography variant="h2" color="blue">
            Forward-Thinking Software Developer | Innovator in Web, Desktop, Mobile and AI Solutions
          </Typography>
          <Typography variant="h5">
            I am a software developer passionate about creating innovative and efficient solutions.
            I have experience in the design and development of web and desktop applications, as well as the creation of 3D models.
          </Typography>
        </div>
      </div>
    </div>
  )
}