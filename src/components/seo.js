import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import { defaultTheme } from "../themes"

function SEO({ description, lang, meta, title, theme }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const pageTitle = `${site.siteMetadata.title}${title ? " | " + title : ""}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={pageTitle}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          property: "og:title",
          content: pageTitle,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:creator",
          content: site.siteMetadata.author,
        },
        {
          name: "twitter:title",
          content: pageTitle,
        },
        {
          name: "twitter:description",
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <link
        crossorigin="anonymous"
        href="//cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"
        integrity="sha256-HxaKz5E/eBbvhGMNwhWRPrAR9i/lG1JeT4mD6hCQ7s4="
        rel="stylesheet"
      />
      <link href={theme.favicon} rel="shortcut icon" />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: "en",
  meta: [],
  title: "",
  description: "",
  theme: defaultTheme,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  theme: PropTypes.object.isRequired,
}

export default SEO
