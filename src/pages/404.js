import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { getTheme } from "../themes"

const NotFoundPage = () => {
  const theme = getTheme()

  return (
    <Layout theme={theme}>
      <SEO title="404: Not found" theme={theme} />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist.</p>
    </Layout>
  )
}

export default NotFoundPage
