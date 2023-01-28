import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  NavbarContainerStyled,
  LogoStyled,
  TitleStyled,
  LinkContainerStyled,
} from './NavbarStyles';

import logo from './logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// ...later


const Navbar = () => {
  const navigate = useNavigate();

  return (
    <NavbarContainerStyled>
      <LogoStyled onClick={() => navigate('/')}>
        <img src={logo} alt="CroMed" />
        {/*<TitleStyled>CroMed</TitleStyled>*/}
      </LogoStyled>
      <LinkContainerStyled>
        <NavLink to='/'>
        <FontAwesomeIcon icon="fa-home" />
        </NavLink>
        <NavLink to='/instrumental'>Instrumental</NavLink>
        <NavLink to='/equipamiento'>Equipamiento</NavLink>
        <NavLink to='/about'>Nosotros</NavLink>
      </LinkContainerStyled>
    </NavbarContainerStyled>
  );
};

export default Navbar;