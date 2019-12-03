const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Anton Emery | Web Dev',
    description: 'Anton Emery, Web Developer in Portland, Oregon'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'projects',
        path: `${__dirname}/src/projects`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-json`
  ],
}
