import React from 'react'
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    scroll-behavior: smooth;
  }

  html {
    background-color: ${({ theme }) => theme.current.bgColor};
    line-height: 1.15;
  }

  body {
    color: ${({ theme }) => theme.current.textColor};
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
    border-bottom: 3px solid ${({ theme }) => theme.current.accentColor};
    color: ${({ theme }) => theme.current.accentColor};
    text-decoration: none;
  }

  a:hover {
    background-color: ${({ theme }) => theme.current.accentColor};
    color: ${({ theme }) => theme.current.bgColor};
  }

  img {
    max-width: 100%;
  }

  .container {
    padding: ${({ theme }) => theme.current.padding / 2}px;

    @media screen and (min-width: ${({ theme }) => theme.current.bPoint}px) {
      padding-bottom: ${({ theme }) => theme.current.padding}px;
      padding-left: ${({ theme }) => theme.current.padding * 2}px;
      padding-right: ${({ theme }) => theme.current.padding * 2}px;
      padding-top: ${({ theme }) => theme.current.padding}px;
    }
  }
`
