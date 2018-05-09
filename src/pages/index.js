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
      imageUrl={project.node.acf.imageurl.source_url}
      id={project.node.wordpress_id}
    />
  })
  return (
  <div>
    <p>Lorem ipsum dolor amet activated charcoal hella hexagon, beard etsy put a bird on it wolf. Heirloom farm-to-table everyday carry, glossier meditation seitan live-edge succulents four loko occupy cardigan keytar woke pinterest. Banjo prism tacos pop-up celiac. Kogi hot chicken scenester gastropub enamel pin meggings cred. Bitters biodiesel jean shorts, austin live-edge man braid 3 wolf moon blue bottle pinterest truffaut intelligentsia pour-over whatever kogi VHS.</p>
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
          source_url
        }
      }
      }
    }
  }
}
`