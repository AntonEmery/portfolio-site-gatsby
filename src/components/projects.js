import React, { Component } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

class Projects extends Component {
  render() {
    console.log(this.props)
    const { image, title, tech, slug } = this.props;
    return (
      <Link to={`${slug}`} className="project">
        <Img fluid={image.childImageSharp.fluid} alt={`{title} screenshot`} />
        <div className="project-description">
          <h5 className="project-title">{title}</h5>
          <h5 className="project-tagline">{tech}</h5>
        </div>
      </Link>
    )
  }
}

export default Projects;