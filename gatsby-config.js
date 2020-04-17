module.exports = {
  siteMetadata: {
    title: "JC",
    description: "Personal site for Jorge Colindres.",
    author: "Colindres, J.",
    siteUrl: "https://colindres.me",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-jsx",
    "gatsby-plugin-robots-txt",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: "peg0hnw",
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
