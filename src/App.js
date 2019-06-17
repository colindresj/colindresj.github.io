import React from 'react'
import { Head, Root, Routes, addPrefetchExcludes } from 'react-static'
import { ThemeProvider } from 'styled-components'
import { Link, Router } from 'components/Router'
import GlobalStyle from 'components/GlobalStyle'
import Loading from 'components/Loading'
import Dynamic from 'containers/Dynamic'
import { darkTheme, lightTheme } from './style'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  const [theme, setTheme] = React.useState(darkTheme);
  const toggleTheme = () => setTheme(theme === darkTheme ? lightTheme : darkTheme)

  return (
    <ThemeProvider theme={{ current: theme, switcher: toggleTheme }}>
      <Root>
        <Head>
          <title>JC</title>
          <link crossorigin="anonymous" href="//cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css" integrity="sha256-HxaKz5E/eBbvhGMNwhWRPrAR9i/lG1JeT4mD6hCQ7s4=" rel="stylesheet" />
          <link rel="stylesheet" href="//use.typekit.net/peg0hnw.css" />
          <link href="./favicon.ico" rel="shortcut icon" />
        </Head>
        <GlobalStyle />
        <div className="container">
          <React.Suspense fallback={<Loading />}>
            <Router>
              <Dynamic path="dynamic" />
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </div>
      </Root>
    </ThemeProvider>
  )
}

export default App
