import React, { Component } from 'react'
import { Link } from 'gatsby'
import Toggle from './toggle';

class Nav extends Component {

  render() {
    return (
      <Toggle>
        {({ on, toggle }) => (
          <div>
            <nav className="nav-list">
              <Link activeClassName="nav-item--is-active" to="/" className="nav-item">HOME</Link>
              {/* <Link activeClassName="nav-item--is-active" to="/blog" className="nav-item">BLOG</Link> */}
              <Link activeClassName="nav-item--is-active" to="/about" className="nav-item">ABOUT</Link>
              <Link activeClassName="nav-item--is-active" to="/contact" className="nav-item">CONTACT</Link>
              <a href="http://www.antonemery.com/antonemeryresume.pdf" target="_blank" rel="noopener noreferrer" className="nav-item">RESUME</a>
            </nav>
            <p className="toggle-menu" onClick={toggle}>MENU</p>
            {on &&
              <nav className="nav-list-mobile">
                <Link onClick={toggle} activeClassName="nav-item--is-active" to="/" className="nav-item">HOME</Link>
                {/* <Link onClick={toggle} activeClassName="nav-item--is-active" to="/blog" className="nav-item">BLOG</Link> */}
                <Link onClick={toggle} activeClassName="nav-item--is-active" to="/about" className="nav-item">ABOUT</Link>
                <Link onClick={toggle} activeClassName="nav-item--is-active" to="/contact" className="nav-item">CONTACT</Link>
                <a href="http://www.antonemery.com/antonemeryresume.pdf" activeClassName="nav-item--is-active" target="_blank" rel="noopener noreferrer" className="nav-item">RESUME</a>
              </nav>}
          </div>
        )}
      </Toggle>
    )
  }
}

export default Nav;