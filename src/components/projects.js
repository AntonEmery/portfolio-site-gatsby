import React, { Component } from 'react'
import Link from 'gatsby-link'

class Projects extends Component {
    render() {
      const { imageUrl, title, tagline, id } = this.props;
      return (
        <Link to={`/project/${id}`} className="project">
            <img className="img-responsive img-responsive--project" src={imageUrl} />
            <div className="project-description">
              <h5 className="project-text">{title}</h5>
              <p className="project-text">{tagline}</p>
            </div>
        </Link>
      )
  }
}

export default Projects;