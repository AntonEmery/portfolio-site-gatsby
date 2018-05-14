import React from 'react'
import Link from 'gatsby-link'
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav className="nav-list">
    <NavLink activeClassName="nav-item--is-active" exact={true} to="/" className="nav-item">HOME</NavLink>
    <NavLink activeClassName="nav-item--is-active" to="/about" className="nav-item">ABOUT</NavLink>
    <NavLink activeClassName="nav-item--is-active" to="/contact" className="nav-item">CONTACT</NavLink>
    <NavLink activeClassName="nav-item--is-active" to="http://antonemery.com/antonemeryresume.pdf" target="_blank" className="nav-item">RESUME</NavLink>
  </nav>
)

export default Nav;