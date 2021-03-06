module.exports = {
  siteMetadata: {
    title: `Rick Booth`,
    description: `My personal portfolio built using Gatsby.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [require('tailwindcss')('./tailwind.js')]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        // develop: true,
        tailwind: true
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `rickboothdotme`,
        short_name: `rickboothdotme`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#1a202c`,
        display: `minimal-ui`,
        icon: `src/assets/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/assets/data`
      }
    },
    `gatsby-plugin-styled-components`
  ],
}
