const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const blogPosts = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                title
                slug
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  if (blogPosts.errors) {
    throw blogPosts.errors
  }

  // Create blog posts pages.
  const posts = blogPosts.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const next = index === posts.length - 1 ? null : posts[index + 1].node
    const previous = index === 0 ? null : posts[index - 1].node
    createPage({
      path: post.node.frontmatter.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })

  const allProjectsJson = await graphql(
    `
    query PortfolioItem {
      allProjectsJson {
       edges {
        node {
          id
          slug
        }
       }
     }
   }
    `
  )
  if (allProjectsJson.errors) {
    throw allProjectsJson.errors
  }

  // Create Projects
  const projects = await allProjectsJson.data.allProjectsJson.edges;
  projects.forEach((project) => {
    createPage({
      path: `${project.node.slug}`,
      component: path.resolve(`./src/templates/project-detail.js`),
      context: {
        projectId: project.node.id
      },
    })
  })

}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}