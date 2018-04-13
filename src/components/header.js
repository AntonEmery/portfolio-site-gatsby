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
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    <Nav />
    </div>
  </div>
)

export default Header
