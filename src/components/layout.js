import React from "react"
import PropTypes from "prop-types"

import Waves from "./waves"

const Layout = ({ theme, children }) => {
  return (
    <div className="container">
      <Waves theme={theme} />
      <main>{children}</main>
      <style jsx global>{`
        * {
          scroll-behavior: smooth;
        }

        html {
          background-color: ${theme.bgColor};
          line-height: 1.15;
        }

        body {
          color: ${theme.textColor};
          font-family: futura-pt, sans-serif;
          font-feature-settings: "liga", "clig", "dlig", "frac", "ss01";
          font-size: 16px;
          font-style: normal;
          font-variant-ligatures: common-ligatures;
          font-variant-numeric: diagonal-fractions;
        }

        h1,
        h2,
        h3 {
          font-weight: 400;
          letter-spacing: 0.75px;
        }

        .post h3 {
          margin-top: ${theme.padding / 1.5}px;
          text-decoration: underline;
        }

        a {
          border-bottom: 3px solid ${theme.accentColor};
          color: ${theme.accentColor};
          text-decoration: none;
        }

        a:hover {
          background-color: ${theme.accentColor};
          color: ${theme.bgColor};
        }

        img {
          max-width: 100%;
        }

        p {
          font-size: 18px;
        }

        .container {
          padding: ${theme.padding / 2}px;
        }

        @media screen and (min-width: ${theme.bPoint}px) {
          .container {
            padding-bottom: ${theme.padding}px;
            padding-left: ${theme.padding * 2}px;
            padding-right: ${theme.padding * 2}px;
            padding-top: ${theme.padding}px;
          }
        }
      `}</style>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
