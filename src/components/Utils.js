import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
 

export const Buttons = ({prop}) => {
  return (
    
    <div className="tw-Button">
      <Button
        variant="gradient"
        size="sm"
        className="hidden lg:inline-block"
      >
        <span>{prop}</span>
      </Button>
    </div>
  )
}