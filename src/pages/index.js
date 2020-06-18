import React from "react"
import { Link, graphql } from "gatsby"

import { getTheme } from "../themes"
import Layout from "../components/layout"
import SEO from "../components/seo"
import InlineLinks from "../components/inline-links"

export default function IndexPage({ data }) {
  const theme = getTheme()

  return (
    <Layout theme={theme}>
      <SEO theme={theme} />
      <header>
        <h1>{data.site.siteMetadata.title}</h1>
        <h2>
          <span>
            MBA Candidate, <a href="https://tuck.dartmouth.edu">Tuck</a>
          </span>
          <span className="spacer" />
          <span>
            Previously @ <a href="https://ldv.co">LDV Capital</a>,{" "}
            <a href="https://workframe.com">Workframe (Acquired by NNF)</a>,{" "}
            <a href="https://northpass.com">Northpass</a>
          </span>
        </h2>
      </header>

      <main>
        <div className="section">
          <h2>Thoughts</h2>
          <p>
            Occasionally, I'll write about things I find interesting, important,
            or have recently learned:
          </p>
          <ul>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <li key={node.id}>
                <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="section">
          <h2>Books</h2>
          <p>Books I'm currently reading:</p>
          <ul>
            {data.site.siteMetadata.books.map(book => (
              <li key={book.title}>
                <a href={book.url}>{book.title}</a>, {book.author}
              </li>
            ))}
          </ul>
        </div>
      </main>

      <InlineLinks
        title="Contact"
        links={data.site.siteMetadata.contactLinks}
      />

      <style>{`
        header {
          padding: ${theme.padding}px 0 0 0;
        }

        .spacer {
          display: block;
          margin: 0.4rem;
        }

        .section {
          margin: 80px 0;
          line-height: 1.4;
        }

        .section h2, .section p {
          margin: 0;
        }

        .section ul {
          list-style: none;
          padding-left: 1rem;
        }

        .section li {
          margin-bottom: 8px;
        }

        .section li:last-child {
          margin-bottom: 0;
        }

        @media (max-width: 933px) {
          header span {
            line-height: 1.5;
          }
        }
      `}</style>
    </Layout>
  )
}

export const query = graphql`
  query GetMarkdownTitles {
    site {
      siteMetadata {
        contactLinks {
          title
          url
        }
        books {
          title
          author
          url
        }
      }
    }
    allMarkdownRemark(sort: { fields: frontmatter___title }) {
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`
