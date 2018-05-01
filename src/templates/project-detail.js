import React, { Component } from 'react';
import Link from 'gatsby-link'


class ProjectDetail extends Component {
  render() {
    const { title, content, acf } = this.props.data.wordpressWpPortfolioItem
    return (
      <div className="project-details">
        <div>
          <p>Project Details</p>
          <p>{title}</p>
          <p>{acf.description}</p>
          <p>Technologies Used: {acf.tagline}</p>
          {acf.livelink
          ? <a href={acf.livelink} target="_blank">Live Project</a>
          : ''}
        </div>
        <div>
          <img className="img-responsive" src={acf.imageurl.source_url} alt="project screen shot"/>
        </div>
      </div>
    );
  }
}

export default ProjectDetail;

export const query = graphql`
  query ProjectDetails($projectId: Int!) {
    wordpressWpPortfolioItem (wordpress_id: { eq: $projectId }) {
      title
      acf {
        tagline
        description
        livelink
        imageurl {
          source_url
        }
      }
    }
  }
`