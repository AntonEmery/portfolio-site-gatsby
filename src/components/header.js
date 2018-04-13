import React from 'react'
import Link from 'gatsby-link'
import Nav from './nav'

const Header = ({ siteTitle }) => (
  <div className="menu-wrapper">
    <div className="container"
      style={{
        padding: '1.45rem 1.0875rem',
      }}
    >
    <Nav />
      <h1 className="page-title"><Link to="/" className="header-link" style={{textDecoration: 'none'}}>Anton Emery</Link></h1>
      <h2 className="sub-title"><Link to="/" className="header-link" style={{textDecoration: 'none'}}>Web Developer - Portland, OR</Link></h2>
    </div>
  </div>
)

export default Header
