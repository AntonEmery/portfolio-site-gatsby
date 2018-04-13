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
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
          }}
        >
          <h1 className="page-title">{siteTitle}</h1>
          <h2 className="sub-title">Web Developer - Portland, OR</h2>
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
