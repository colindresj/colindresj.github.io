import React from 'react'
import s, { ThemeContext } from 'styled-components'

const Header = s.header`
  padding: ${({ padding }) => padding}px 0;
`

const Spacer = s.span`
  display: block;
  margin: 0.4rem;
`

export default () => {
  const theme = React.useContext(ThemeContext).current

  return (
    <Header padding={theme.padding}>
      <h1>JC</h1>
      <h2>Software Engineer</h2>
      <h3>
        <span>MBA Candidate, <a href="https://tuck.dartmouth.edu">Tuck</a></span>
        <Spacer />
        <span>Summer Analyst, <a href="https://ldv.co">LDV Capital</a></span>
    </h3>
    </Header>
  )
}
