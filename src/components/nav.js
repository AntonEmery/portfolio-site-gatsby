import React from 'react'
import Link from 'gatsby-link'

const Nav = () => (
  <nav>
    <ul className="nav-list">
      <li className="nav-item">
        <Link to="#" className="nav">HOME</Link>
      </li>
      <li className="nav-item">
        <Link to="#" className="nav">ABOUT</Link>
      </li>
      <li className="nav-item">
        <Link to="#" className="nav">CONTACT</Link>
      </li>
      <li className="nav-item nav-item--last">
        <Link to="#" className="nav">RESUME</Link>
      </li>
    </ul>
  </nav>
)

export default Nav;