import React from "react"
import { ThemeProvider } from 'styled-components'
import LightTheme from '../style/themes/LightTheme';

import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { Footer } from './Footer/Footer';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  if (location.pathname === rootPath) {
    title = 'Dev Trotter - Blog'
  } else if (location.pathname === '/apropos') {
    title = 'Dev Trotter - À propos'
  }
  return (
    <ThemeProvider theme={LightTheme}>
      <Header pageTitle={title} />
      <Main>
        {children}
      </Main>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
