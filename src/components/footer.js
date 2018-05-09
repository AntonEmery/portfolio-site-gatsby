import React from 'react'
import Link from 'gatsby-link'

import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square'
import FaTwitterSquare from 'react-icons/lib/fa/twitter-square'
import FaGithubSquare from 'react-icons/lib/fa/github-square'
import FaEnvelope from 'react-icons/lib/fa/envelope'

const Footer = () => (
  <footer>
    <div className="social">
      <a href="http://www.linkedin.com/in/antonemery" className="social-link" target="_blank">
        <FaLinkedinSquare />
      </a>
      <a href="http://www.twitter.com/antonemery" className="social-link" target="_blank">
        <FaTwitterSquare />
      </a>
      <a href="http://www.github.com/antonemery" className="social-link" target="_blank">
        <FaGithubSquare />
      </a>
      <a href="mailto:antonemery@gmail.com" className="social-link" target="_blank">
        <FaEnvelope />
      </a>
    </div>
    <p className="gatsby">Built with &hearts; using <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby.js</a></p>
  </footer>
)


export default Footer;