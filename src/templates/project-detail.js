import React, { Component } from 'react';
import Link from 'gatsby-link'


class ProjectDetail extends Component {
  render() {
    const { title, content, acf } = this.props.data.wordpressWpPortfolioItem
    return (
      <div className="project-details">
        <div>
          <h3>{title}</h3>
          <p dangerouslySetInnerHTML={{__html: acf.description}} />
          <p><span className="text-bold">Technologies Used:</span> {acf.tagline}</p>
          <a href={acf.livelink} target="_blank"><button className="project-button">Live Project</button></a>
          { acf.github
            ? <a href={acf.github} target="_blank"><button className="project-button">Github Repo</button></a>
            : ''
          }
        </div>
        <div className="project-image">
          <img className="img-responsive" src={acf.imageurl.localFile.childImageSharp.resolutions.src} alt="project screen shot"/>
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
          localFile {
            childImageSharp {
              resolutions {
                src
              }
            }
          }
        }
      }
    }
  }
`