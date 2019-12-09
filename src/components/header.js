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
      <div className="site-heading">
        <Link to="/">
          <h1 className="page-title">Anton Emery</h1>
          {/* <div className="sub-title">Web Developer</div> */}
        </Link>
      </div>
    </div>
  </div>
)

export default Header
