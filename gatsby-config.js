module.exports = {
  siteMetadata: {
    title: `Oak Ridge Contracting`,
    description: `Residential & Commercial Remodeling`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    {
      resolve: `gatsby-source-facebook`,
      options: {
        places: [`oakridgecontracting`], // Can be either a numeric ID or the URL ID
        params: {
          fields: "hours, posts { message, created_time }", // See Facebooks API to see what you can query for
        },
        key: process.env.FACEBOOK_GRAPH_TOKEN, // You will need to create a Facebook application and go through review in order to get an API token.
        version: "5.0", // The version of the graph API to use. Defaults to 5.0
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
