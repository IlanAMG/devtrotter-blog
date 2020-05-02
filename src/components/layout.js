import React from "react"
import { Link } from "gatsby"
import { ThemeProvider } from 'styled-components'
import LightTheme from '../style/themes/LightTheme';

import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { Footer } from './Footer/Footer';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  console.log(children)
  return (
    <ThemeProvider theme={LightTheme}>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
