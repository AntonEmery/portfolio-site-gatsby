import React from 'react'
import Link from 'gatsby-link'

class Projects extends React.Component {

  render() {
    return (
      <div className="projects-container">
        <a href="#" className="project"><img
        className="img-responsive" src="http://www.antonemery.com/wp-content/uploads/2016/08/iflyalaska.png" />
        <div className="project-description">
          <h5 className="project-text">I fly alaska</h5>
          <p className="project-text">React, Webpack, SCSS</p>
        </div>
        </a>
        <a href="#" className="project"><img
        className="img-responsive" src="http://www.antonemery.com/wp-content/uploads/2016/08/iflyalaska.png" /></a>
        <a href="#" className="project"><img
        className="img-responsive" src="http://www.antonemery.com/wp-content/uploads/2016/08/iflyalaska.png" /></a>
      </div>
    )
  }
}

export default Projects;



