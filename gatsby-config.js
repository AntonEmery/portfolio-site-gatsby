module.exports = {
  siteMetadata: {
    title: 'Anton Emery | Web Dev'
  },
  plugins: ['gatsby-plugin-react-helmet', 'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'www.antonemery.com',
        protocol: 'http',
        hostingWPCOM: false,
        useACF: true
      }
    }
  ],
}
