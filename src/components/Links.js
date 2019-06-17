import React from 'react'
import s from 'styled-components'

const Links = s.ul`
  display: inline;
  list-style-type: none;
  padding: 0;
  line-height: 2;
`

const Link = s.li`
  display: inline
  padding-left: 0;
`

const LinkWithArrow = s(Link)`
  &:before {
    content: "⇝";
    margin: 0 9px;
  }
`

export default ({ title, links }) => (
  <Links>
    <Link>{title}</Link>
    {links.map(({text, href}) => (
      <LinkWithArrow key={text}>
        <a href={href}>
          {text}
        </a>
      </LinkWithArrow>)
    )}
  </Links>
)
