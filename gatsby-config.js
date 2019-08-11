module.exports = {
  siteMetadata: {
    title: 'Anton Emery | Web Dev'
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
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/src/blog`
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp'
  ],
}
