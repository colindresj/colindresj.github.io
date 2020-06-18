import React from "react"
import { graphql } from "gatsby"

import { getTheme } from "../themes"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function MarkdownTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  const theme = getTheme()

  return (
    <Layout theme={theme}>
      <SEO theme={theme} />
      <div>
        <h2>{frontmatter.title}</h2>
        <div className="post" dangerouslySetInnerHTML={{ __html: html }} />
      </div>

      <style jsx global>{`
        .post hr {
          background-color: ${theme.accentColor};
          border: 0;
          height: 3px;
          margin: 40px auto;
          width: 50px;
        }
      `}</style>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
