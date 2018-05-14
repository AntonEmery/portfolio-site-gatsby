import React from 'react'
import Link from 'gatsby-link'
import Projects from '../components/projects'
import Skills from '../components/skills'


const IndexPage = props => {
  const webProjects = props.data.allWordpressWpPortfolioItem.edges;
  const projects = webProjects.map((project, index) => {
    return <Projects
      key={index}
      title={project.node.title}
      tagline={project.node.acf.tagline}
      imageUrl={project.node.acf.imageurl.localFile.childImageSharp.resolutions.src}
      id={project.node.wordpress_id}
    />
  })
  return (
  <div>
    <h3>Hi there, thanks for stopping by!</h3>

    <h3>I am a mostly front end web developer in Portland, Oregon. I love writing clean, resuable Javascript and think unit tests are important. I pride myself on being a friendly guy to work with and value being on a collaborative team.</h3>
    <h2>Projects</h2>
    <section className="projects-container">
      {projects}
    </section>
    <h2>Technology I like</h2>
    <Skills />
  </div>
  )
}

export default IndexPage

export const websiteQuery = graphql`
  query PortfolioItem {
    allWordpressWpPortfolioItem {
    edges {
     node {
      wordpress_id
      title
      content
      acf {
        livelink
        tagline
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
  }
}
`