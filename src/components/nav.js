import React, { Component } from 'react'
import Link from 'gatsby-link'
import { NavLink } from 'react-router-dom';
import Toggle from './toggle';

class Nav extends Component {

  componentDidMount() {
    console.log('component did mount')
  }

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
            <p className="toggle-menu" onClick={toggle}>MENU</p>
            {on &&
            <nav className="nav-list-mobile">
              <NavLink onClick={toggle} onBlur={toggle} activeClassName="nav-item--is-active" exact={true} to="/" className="nav-item">HOME</NavLink>
              <NavLink onClick={toggle} activeClassName="nav-item--is-active" to="/about" className="nav-item">ABOUT</NavLink>
              <NavLink onClick={toggle} activeClassName="nav-item--is-active" to="/contact" className="nav-item">CONTACT</NavLink>
              <NavLink onClick={toggle} activeClassName="nav-item--is-active" to="http://antonemery.com/antonemeryresume.pdf" target="_blank" className="nav-item">RESUME</NavLink>
            </nav>}
          </div>
          )}
      </Toggle>
    )
  }
}

export default Nav;