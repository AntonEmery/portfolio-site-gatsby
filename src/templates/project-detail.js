import React, { Component } from 'react'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'


class ProjectDetail extends Component {
  render() {
    const projectData = this.props.data.allProjectsJson.edges[0].node
    console.log(projectData)
    return (
      <Layout>
        <div className="project-details">
          <div>
            <h3>{projectData.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: projectData.description }} />
            <p><span className="text-bold">Technologies Used:</span> {projectData.tech}</p>
            {
              projectData.liveLink && <a href={projectData.liveLink} target="_blank" rel="noopener noreferrer"><button className="project-button">Live Project</button></a>
            }
            {
              projectData.githubLink && <a href={projectData.githubLink} target="_blank" rel="noopener noreferrer"><button className="project-button">Github Repo</button></a>
            }
          </div>
          <div className="project-image">
            <Img className="img-responsive" fluid={projectData.image.childImageSharp.fluid} alt={`{title} screenshot`} />
          </div>
        </div>
      </Layout>
    );
  }
}

export default ProjectDetail;

export const query = graphql`
  query ProjectDetails($projectId: String!) {
    allProjectsJson (filter: {id: {eq: $projectId}})  {
      edges {
        node {
          id
          title
          tech
          slug
          image {
            childImageSharp {
              fluid {
                aspectRatio
                base64
                sizes
                src
                srcSet
              }
            }
          }
          description
          githubLink
          liveLink
        }
      }
    }
}
`