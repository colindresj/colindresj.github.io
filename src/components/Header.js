/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import ThemeContext from '../theme'

export default () => {
  const headerCss = padding => ({ padding: `${padding}px 0` })
  const spacerCss = { display: 'block', margin: '0.4rem' }

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <header css={headerCss(theme.padding)}>
          <h1>JC</h1>
          <h2>Software Engineer</h2>
          <h3>
            <span>MBA Candidate, <a href="https://tuck.dartmouth.edu">Tuck</a></span>
            <span css={spacerCss} />
            <span>Analyst, <a href="https://ldv.co">LDV Capital</a></span>

            <div style={{ marginTop: 80, lineHeight: '1.4' }}>
              Investment Theses: <a href="/software-for-5G">Software for 5G</a>, <a href="/commoditized-intelligence">Commoditized Intelligence</a>, <a href="/data-explained">Data Explained</a>
            </div>
          </h3>
        </header>
      )}
    </ThemeContext.Consumer>
  )
}
