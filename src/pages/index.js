import React from 'react'
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
    <p>Hi there, thanks for stopping by!</p>

    <p>I am a mostly front end web developer in Portland, Oregon. I love writing clean, resuable Javascript and think unit tests are important. I pride myself on being a friendly guy to work with, and value being on a collaborative team.</p>
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