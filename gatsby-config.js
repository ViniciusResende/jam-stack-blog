module.exports = {
  siteMetadata: {
    siteUrl: 'https://jamstackblogmain.gatsbyjs.io/',
    title: 'JamStack Portifolio',
  },
  plugins: [
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `projects`,
        path: `${__dirname}/projects`,
      },
    },
  ],
};
