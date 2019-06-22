import React from 'react'
import ThemeContext from '../theme'
import Header from '../components/Header'
import Wave from '../components/Wave'
import Links from '../components/Links'

const links = [
  {
    text: 'Email',
    href: 'mailto:jorge.e.colindres@gmail.com'
  },
  {
    text: 'Github',
    href: 'https://github.com/colindresj'
  },
  {
    text: 'Twitter',
    href: 'https://twitter.com/colindresj_'
  }
]

const handleReturn = switchTheme => e => e.keyCode === 13 ? switchTheme() : null;

export default () => {
  return (
    <ThemeContext.Consumer>
      {({ switchTheme }) => (
        <>
          <span style={{ cursor: 'pointer' }}
                onClick={switchTheme}
                onKeyDown={handleReturn(switchTheme)}
                tabIndex={1}>
            <Wave />
          </span>
          <Header />
          <main style={{ marginTop: '0.67em' }}>
            <Links title="Contact" links={links} />
          </main>
        </>
      )}
    </ThemeContext.Consumer>
  )
}
