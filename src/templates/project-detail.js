import React, { Component } from 'react';
import Link from 'gatsby-link'


class ProjectDetail extends Component {
  render() {
    const { title, content, acf } = this.props.data.wordpressWpPortfolioItem
    return (
      <div className="project-details">
        <div>
          <h3>{title}</h3>
          <p>{acf.description}</p>
          <p><span className="text-bold">Technologies Used:</span> {acf.tagline}</p>
          <a href={acf.livelink} target="_blank">Live Project</a>
          { acf.github
            ? <a href={acf.github} target="_blank">Github Repo</a>
            : ''
          }
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
        github
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