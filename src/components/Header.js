import React, { useEffect, useState } from 'react';
import { NavItem } from './Items'
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";

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

return (
  <div className="navbar-list">
    {
      navItems.map((navItem) => (
        <React.Fragment key={navItem.Iam}>
          <NavItem label={navItem.Iam} targetSection="section-Yo" />
          <NavItem label={navItem.AboutMe} targetSection="section-Sobre-mi" />
          <NavItem label={navItem.Projects} targetSection="section-Proyectos" />
          <NavItem label={navItem.Contact} targetSection="section-Contacto" />
        </React.Fragment>
      ))
    }
  </div>
)


}
