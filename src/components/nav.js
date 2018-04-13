import React from 'react'
import Link from 'gatsby-link'

const Nav = () => (
  <nav>
    <Link to="#" className="nav">Home</Link>
    <Link to="#" className="nav">Contact</Link>
    <Link to="#" className="nav">Resume</Link>
    <Link to="/about" className="nav">About</Link>
  </nav>
)

export default Nav;