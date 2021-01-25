module.exports = {
  siteMetadata: {
    title: "Ants Website",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress-experimental",
      options: {
        url: "",
      },
    },
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
