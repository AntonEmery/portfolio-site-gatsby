import React, { Component } from 'react'
import Link from 'gatsby-link'
import Img from './img';

class Projects extends Component {
  render() {
    const { imageUrl, title, tagline, id } = this.props;
    return (
      <Link to={`/project/${id}`} className="project">
        <img className="img-responsive" src={imageUrl} alt="project screen shot" />
        <div className="project-description">
          <h5 className="project-title">{title}</h5>
          <p className="project-tagline">{tagline}</p>
        </div>
      </Link>
    )
  }
}

export default Projects;