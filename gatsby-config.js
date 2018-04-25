module.exports = {
  siteMetadata: {
    title: 'Anton Emery | Web Dev'
  },
  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'www.antonemery.com',
        protocol: 'http',
        hostingWPCOM: false,
        useACF: true
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass'
  ],
}
