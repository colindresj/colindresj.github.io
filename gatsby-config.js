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
        title: "Leadership Presence",
        url: "//www.goodreads.com/book/show/4731749-leadership-presence",
        author: "Belle Linda Halpern, Kathy Lubar"
      },
      {
        title: "A Short History of Nearly Everything",
        url:
          "//www.goodreads.com/book/show/21.A_Short_History_of_Nearly_Everything",
        author: "Bill Bryson"
      },
      {
        title:
          "The Great Degeneration: How Institutions Decay and Economies Die",
        url: "//www.goodreads.com/book/show/16129479-the-great-degeneration",
        author: "Niall Ferguson"
      },
      {
        title: "On Tyranny: Twenty Lessons from the Twentieth Century",
        url: "https://www.goodreads.com/book/show/33917107-on-tyranny",
        author: "Timothy Snyder"
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
