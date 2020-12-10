import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavBarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>Pizza</NavLink>
        <NavIcon>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  )
}

export default Navbar
