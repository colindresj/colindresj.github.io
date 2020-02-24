import React from 'react'
import { Global, css } from '@emotion/core'
import ThemeContext from '../theme'

const globalCss = theme => css`
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

    @media screen and (min-width: ${theme.bPoint}px) {
      padding-bottom: ${theme.padding}px;
      padding-left: ${theme.padding * 2}px;
      padding-right: ${theme.padding * 2}px;
      padding-top: ${theme.padding}px;
    }
  }

  .post h3 {
    margin-top: ${theme.padding / 1.5}px;
    text-decoration: underline;
  }
`

export default () => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <Global styles={globalCss(theme)} />
    )}
  </ThemeContext.Consumer>
)
