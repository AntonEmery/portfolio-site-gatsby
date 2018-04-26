import React from 'react'
import Link from 'gatsby-link'

function Projects({title, tagline, imageUrl}){
    return (
      <div className="project">
        <Link to="/project-details">
          <img className="img-responsive img-responsive--project" src={imageUrl} />
          <div className="project-description">
            <h5 className="project-text">{title}</h5>
            <p className="project-text">{tagline}</p>
          </div>
        </Link>
      </div>
    )
}

export default Projects;