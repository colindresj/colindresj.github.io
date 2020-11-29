module.exports = {
  siteMetadata: {
    title: "JC",
    description: "Personal site for Jorge Colindres.",
    author: "Colindres, J.",
    siteUrl: "https://colindres.me",
    contactLinks: [
      {
        title: "Email",
        url: "mailto:jorge.e.colindres@gmail.com"
      },
      {
        title: "Github",
        url: "https://github.com/colindresj"
      },
      {
        title: "Twitter",
        url: "https://twitter.com/colindresj_"
      }
    ],
    books: [
      {
        title: "The American History",
        url: "https://www.goodreads.com/book/show/43822548-the-american-story",
        author: "David M. Rubenstein"
      },
      {
        title: "The Bottom Billion",
        url: "https://www.goodreads.com/book/show/493371.The_Bottom_Billion",
        author: "Paul Collier"
      }
    ]
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-jsx",
    "gatsby-plugin-robots-txt",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`
      }
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: "peg0hnw"
        }
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ]
}
