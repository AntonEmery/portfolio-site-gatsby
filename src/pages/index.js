import React from 'react'
import Projects from '../components/projects'
import Skills from '../components/skills'
import Layout from '../components/layout'
import { graphql } from 'gatsby'


const IndexPage = props => {
  const projectsFromJSON = props.data.allProjectsJson.edges
  const projects = projectsFromJSON.map((project, index) => {
    return <Projects
      key={index}
      title={project.node.title}
      tech={project.node.tech}
      image={project.node.image}
      slug={project.node.slug}
    />
  })
  return (
    <Layout>
      <div>
        <p>Hi there, thanks for stopping by!</p>

        <p>I am a web developer living in wonderful Portland, Oregon. I have experience with a variety of front end frameworks, as well as plenty of vanilla Javascript.  I pride myself on being a friendly guy to work with, and value being on a collaborative team.</p>
        <h2>Projects</h2>
        <p>I wish I had more time to work on cool projects after work. Below are some examples of things I have done. Check out my <a href="http://www.github.com/antonemery" target="_blank" className="text-link">Github</a> as well for more recent work. </p>
        <section className="projects-container">
          {projects}
        </section>
        <Skills />
      </div>
    </Layout>
  )
}

export default IndexPage

export const projectsQuery = graphql`
  query MyQuery {
    allProjectsJson {
      edges {
        node {
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
        }
      }
    }
  }
`