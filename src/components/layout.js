import React from "react"
import PropTypes from "prop-types"

import { defaultTheme } from "../themes"
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
          line-height: 1.15;
        }

        body {
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

        a {
          text-decoration: none;
        }

        img {
          max-width: 100%;
        }

        p {
          font-size: 18px;
        }

        .post h3 {
          text-decoration: underline;
        }
      `}</style>
      <style jsx global>{`
        html {
          background-color: ${theme.bgColor};
        }

        body {
          color: ${theme.textColor};
        }

        a {
          border-bottom: 3px solid ${theme.accentColor};
          color: ${theme.accentColor};
        }

        a:hover {
          background-color: ${theme.accentColor};
          color: ${theme.bgColor};
        }

        svg path {
          stroke: ${theme.accentColor};
        }

        .container {
          padding: ${theme.padding / 2}px;
        }

        .post h3 {
          margin-top: ${theme.padding / 1.5}px;
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
  theme: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  theme: defaultTheme,
}

export default Layout
