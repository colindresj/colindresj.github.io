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
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
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
