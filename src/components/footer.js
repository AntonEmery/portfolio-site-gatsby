import React from 'react'
import { FaLinkedin, FaTwitterSquare, FaGithubSquare, FaEnvelope } from 'react-icons/fa'

const Footer = () => (
  <footer>
    <div className="social">
      <a href="http://www.linkedin.com/in/antonemery" className="social-link" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="http://www.twitter.com/antonemery" className="social-link" target="_blank" rel="noopener noreferrer">
        <FaTwitterSquare />
      </a>
      <a href="http://www.github.com/antonemery" className="social-link" target="_blank" rel="noopener noreferrer">
        <FaGithubSquare />
      </a>
      <a href="mailto:antonemery@gmail.com" className="social-link" target="_blank" rel="noopener noreferrer">
        <FaEnvelope />
      </a>
    </div>
    <p className="gatsby">Built using <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer" className="text-link">Gatsby.js</a> and <a href="https://wordpress.org/" target="_blank" rel="noopener noreferrer" className="text-link">WordPress</a></p>
  </footer>
)


export default Footer;