import React, { Component } from 'react'
import Link from 'gatsby-link'
import { NavLink } from 'react-router-dom';
import Toggle from './toggle';

class Nav extends Component {

  render() {
    return (
      <Toggle>
        {({ on, toggle }) => (
          <div>
            <nav className="nav-list">
              <NavLink activeClassName="nav-item--is-active" exact={true} to="/" className="nav-item">HOME</NavLink>
              <NavLink activeClassName="nav-item--is-active" to="/about" className="nav-item">ABOUT</NavLink>
              <NavLink activeClassName="nav-item--is-active" to="/contact" className="nav-item">CONTACT</NavLink>
              <NavLink activeClassName="nav-item--is-active" to="http://antonemery.com/antonemeryresume.pdf" target="_blank" className="nav-item">RESUME</NavLink>
            </nav>
            <p className="toggle-menu" onClick={toggle}>TOGGLE MENU</p>
            {on &&
            <nav className="nav-list-mobile">
              <NavLink activeClassName="nav-item--is-active" exact={true} to="/" className="nav-item">HOME</NavLink>
              <NavLink activeClassName="nav-item--is-active" to="/about" className="nav-item">ABOUT</NavLink>
              <NavLink activeClassName="nav-item--is-active" to="/contact" className="nav-item">CONTACT</NavLink>
              <NavLink activeClassName="nav-item--is-active" to="http://antonemery.com/antonemeryresume.pdf" target="_blank" className="nav-item">RESUME</NavLink>
            </nav>}
          </div>
          )}
      </Toggle>
    )
  }
}

export default Nav;