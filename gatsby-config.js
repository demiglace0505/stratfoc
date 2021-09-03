module.exports = {
  siteMetadata: {
    title: `Stratfoc`,
    description: `A portfolio website built in ReactJS and Gatsby by CHRISTIAN CRUZ.`,
    titleTemplate: `%s | Strategic Focus`,
    author: `@stratfoc`,
    url: `https://stratfoc.netlify.app`,
    siteUrl: "https://stratfoc.netlify.app",
    image: "/mainimg.png",
    twitterUsername: "@demiglace0505",
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          "Poppins: 200, 300, 400, 500, 600, 700",
          "Fjalla One: 400",
          "Architects Daughter: 400, 500, 600",
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#c912c1`,
        theme_color: `#c912c1`,
        display: `minimal-ui`,
        icon: `src/assets/icon/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`work-experience`],
        // singleTypes: [`home-page`, `contact`],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
