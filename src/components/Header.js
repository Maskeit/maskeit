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
      navItems.map(navItem =>{
        // console.log(navItems);
        return(
          <React.Fragment key={navItem.Iam}>
            <NavItem prop={navItem.Iam} />
            <NavItem prop={navItem.AboutMe} />
            <NavItem prop={navItem.Projects} />
            <NavItem prop={navItem.Contact} />
          </React.Fragment>
        )
      })
    }
  </div>
)


}
