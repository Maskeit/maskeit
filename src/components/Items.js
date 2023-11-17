import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
 

export const NavItem = ({prop}) => {
  return (    
    <div>
      <button className="navbar-button">
        <span>{prop}</span>    
      </button>
    </div>
  )
}

export const NavIcons = () =>{
  return(
    <div>NavIcons</div>
  )
}