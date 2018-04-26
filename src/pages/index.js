import React from 'react'
import Link from 'gatsby-link'
import Projects from '../components/projects'

const IndexPage = props => {
  console.log(props)
  const webProjects = props.data.allWordpressWpPortfolioItem.edges;
  const test = webProjects.map((project, index) => {
    return <Projects
      key={index}
      title={project.node.title}
      tagline={project.node.acf.tagline}
      imageUrl={project.node.acf.imageurl.source_url}
    />
  })
  return (
  <div>
    <p>Lorem ipsum dolor amet activated charcoal hella hexagon, beard etsy put a bird on it wolf. Heirloom farm-to-table everyday carry, glossier meditation seitan live-edge succulents four loko occupy cardigan keytar woke pinterest. Banjo prism tacos pop-up celiac. Kogi hot chicken scenester gastropub enamel pin meggings cred. Bitters biodiesel jean shorts, austin live-edge man braid 3 wolf moon blue bottle pinterest truffaut intelligentsia pour-over whatever kogi VHS.</p>
    <div className="projects-container">
      {test}
    </div>
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

// export const webappQuery = graphql`
//   query WebApp {
// 	  allWordpressWpWebapp {
//     edges {
//      node {
//       wordpress_id
//       title
//       content
//       acf {
//         githublink
//         livelink
//         tagline
//         imageurl {
//           source_url
//         }
//       }
//     }
//   }
//   }
// }
// `
