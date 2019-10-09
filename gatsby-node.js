/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
     query PortfolioItem {
     allWordpressWpPortfolioItem {
      edges {
       node {
        wordpress_id
       }
      }
    }
  }
    `
    ).then(result => {
      result.data.allWordpressWpPortfolioItem.edges.forEach(({ node }) => {
        createPage({
          path: `project/${node.wordpress_id}`,
          component: path.resolve(`./src/templates/project-detail.js`),
          context: {
            projectId: node.wordpress_id
          },
        })
      })
    })

    //   graphql(`
    //   allMarkdownRemark(
    //     sort: { order: DESC, fields: [frontmatter___date] }
    //     limit: 1000
    //     ) {
    //       edges {
    //         node {
    //           frontmatter {
    //             path
    //           }
    //         }
    //       }
    //     }
    //   }
    //   `)
    // })
    //   .then(result => {
    //     result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    //       const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)
    //       createPage({
    //         path: node.frontmatter.path,
    //         component: blogPostTemplate,
    //         context: {}, // additional data can be passed via context
    //       })
    //     })
    resolve();
  }).catch(error => {
    console.log(error)
    reject()
  })
}
