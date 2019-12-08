import React, { Component } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

class Projects extends Component {
  render() {
    const { image, title, tech, slug } = this.props;
    return (
      <Link to={`${slug}`} className="project">
        <Img className="img-responsive" fluid={image.childImageSharp.fluid} alt={`image of ${title}`} />
        <div className="project-description">
          <h5 className="project-title">{title}</h5>
          <p className="project-tagline">{tech}</p>
        </div>
      </Link>
    )
  }
}

export default Projects;