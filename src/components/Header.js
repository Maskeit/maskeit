import React, { useEffect, useState } from 'react';
import { NavItem } from './Items'
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";


export function NavbarWithSearch() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
}



export const Header = () => {
  //estados de react
  const [navItems, setNavItems] = useState([]);
  const [cargando, setCargando] = useState(true);


  const getNavList = () =>{
      setNavItems([{
        Iam : "Yo",
        AboutMe : "Sobre mi",
        Projects : "Proyectos",
        Contact : "Contacto" 
      }]);
  }

  useEffect(()=>{
    getNavList();
  },[]);



const AltHeader = () =>{
  return(
    <div>
      
    </div>
  );
}
return (
  <div className="navbar-list">
    {
      navItems.map((navItem) => (
        <React.Fragment key={navItem.Iam}>
          <NavItem label={navItem.Iam} targetSection="Hero" />
          <NavItem label={navItem.AboutMe} targetSection="Aboutme" />
          <NavItem label={navItem.Projects} targetSection="Projects" />
          <NavItem label={navItem.Contact} targetSection="section-Contacto" />
        </React.Fragment>
      ))
    }
  </div>
)



}
