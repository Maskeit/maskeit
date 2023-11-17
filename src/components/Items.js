import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
 

export const NavItem = ({label, targetSection}) => {
  const handleClick = () => {
    const section = document.getElementById(targetSection);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (    
    <div>
      <button className="navbar-button">
        <span>{label}</span>    
      </button>
    </div>
  )
}

export const NavIcons = () =>{
  return(
    <div>NavIcons</div>
  )
}

export const cardButton = (prop) =>{
  <div>
    <button className="card-button">
      <span>{prop}</span>    
    </button>
  </div>
}