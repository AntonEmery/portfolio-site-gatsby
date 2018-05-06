import React from 'react'
import Link from 'gatsby-link'
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav>
    <ul className="nav-list">
      <li className="nav-item">
        <NavLink activeClassName="nav--is-active" to="/" className="nav">HOME</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="nav--is-active" to="/about" className="nav">ABOUT</NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="nav--is-active" to="#" className="nav">CONTACT</NavLink>
      </li>
      <li className="nav-item nav-item--last">
        <NavLink activeClassName="nav--is-active" to="#" className="nav">RESUME</NavLink>
      </li>
    </ul>
  </nav>
)

export default Nav;