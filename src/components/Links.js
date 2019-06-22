/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'

const linksCss = {
  display: 'inline',
  lineHeight: 2,
  listStyleType: 'none',
  padding: 0,
}

const linkCss = {
  display: 'inline',
  paddingLeft: 0,
}

const linkWithArrowCss = {
  ...linkCss,
  '&:before': {
    content: '"⇝"',
    margin: '0 9px',
  },
}

export default ({ title, links }) => (
  <ul css={linksCss}>
    <li css={linkCss}>{title}</li>
    {links.map(({text, href}) => (
      <li key={text} css={linkWithArrowCss}>
        <a href={href}>
          {text}
        </a>
      </li>
    ))}
  </ul>
)
