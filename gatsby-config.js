const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Anton Emery | Web Dev',
    description: 'Anton Emery, Web Developer in Portland, Oregon'
  },
  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'localhost:3000/wordpresstest',
        protocol: 'http',
        hostingWPCOM: false,
        useACF: true
      }
    },
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
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    `gatsby-transformer-remark`,
  ],
}
