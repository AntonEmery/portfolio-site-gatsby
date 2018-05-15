/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

 const path = require('path');

 exports.createPages = ({graphql, boundActionCreators}) => {
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
      resolve()
    })
   }).catch(error => {
     console.log(error)
     reject()
   })
 };

