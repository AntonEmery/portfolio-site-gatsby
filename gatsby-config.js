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
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass'
  ],
}
