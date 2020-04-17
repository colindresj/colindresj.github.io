import React from "react"
import { Link } from "gatsby"

import { getTheme } from "../themes"
import Layout from "../components/layout"
import SEO from "../components/seo"
import InlineLinks from "../components/inline-links"

const links = [
  {
    text: "Email",
    href: "mailto:jorge.e.colindres@gmail.com",
  },
  {
    text: "Github",
    href: "https://github.com/colindresj",
  },
  {
    text: "Twitter",
    href: "https://twitter.com/colindresj_",
  },
]

const IndexPage = () => {
  const theme = getTheme()

  return (
    <Layout theme={theme}>
      <SEO theme={theme} />
      <header>
        <h1>JC</h1>
        <h2>Software Engineer</h2>
        <h3>
          <span>
            MBA Candidate, <a href="https://tuck.dartmouth.edu">Tuck</a>
          </span>
          <span className="spacer" />
          <span>
            Analyst, <a href="https://ldv.co">LDV Capital</a>
          </span>

          <div className="pages">
            Thoughts: <Link to="/software-for-5g">Software for 5G</Link>,{" "}
            <Link to="/commoditized-intelligence">
              Commoditized Intelligence
            </Link>
            , <Link to="/data-explained">Data Explained</Link>
          </div>
        </h3>
      </header>

      <InlineLinks title="Contact" links={links} />

      <style>{`
        header {
          padding: ${theme.padding}px 0;
        }

        section {
          font-size: 18px;
          font-weight: 400;
        }

        .spacer {
          display: block;
          margin: 0.4rem;
        }
        .pages {
          margin-top: 80px;
          line-height: 1.4;
        }
      `}</style>
    </Layout>
  )
}

export default IndexPage
