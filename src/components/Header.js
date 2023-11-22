import React, { useEffect, useState } from 'react';
import { NavItem } from './Items'
import "../styles/Header.css";

import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";


export const Header = () => {
  //estados de react
  const [navItems, setNavItems] = useState([]);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(false); // Inicialmente, el navbar no es visible
  const [isHovered, setIsHovered] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10 || isHovered);
    setPrevScrollPos(currentScrollPos);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);

  useEffect(() => {
    const getNavList = () => {
      setNavItems([
        { Iam: "Inicio", AboutMe: "Sobre mi", Projects: "Proyectos", Contact: "Contacto" },
      ]);
    };

    setTimeout(() => {
      // Después de 2 segundos, mostrar el navbar
      setVisible(true);
    }, 2000);

    getNavList();
  }, []);

return (
    <div className={`navbar-list ${visible ? 'visible' : 'hidden'}`}>
        {
          navItems.map((navItem) => (
            <React.Fragment key={navItem.Iam}>
              <NavItem label={navItem.Iam} targetSection="Hero-id" />
              <NavItem label={navItem.AboutMe} targetSection="Aboutme-id" />
              <NavItem label={navItem.Projects} targetSection="Projects" />
              <NavItem label={navItem.Contact} targetSection="section-Contacto" />
            </React.Fragment>
          ))
        }
  </div>

  );


}
