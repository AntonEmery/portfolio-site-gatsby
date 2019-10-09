import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from './header'
import Footer from './footer'
import { useStaticQuery, graphql } from 'gatsby'
import '../scss/index.scss'


const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `
  )
  return (
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: data.site.siteMetadata.description },
        ]}
      />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 1170,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        {children}
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.object,
}

export default Layout

