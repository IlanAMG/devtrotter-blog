import React, { useState } from "react"
import { ThemeProvider } from 'styled-components'
import LightTheme from '../style/themes/LightTheme';
import DarkTheme from '../style/themes/DarkTheme';
import { Switch } from 'antd';

import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { Footer } from './Footer/Footer';

const Layout = ({ location, title, children }) => {
  const [dark, setDark] = useState(false)
  const rootPath = `${__PATH_PREFIX__}/`

  if (location.pathname === rootPath) {
    title = 'Dev Trotter - Blog'
  } else if (location.pathname === '/apropos') {
    title = 'Dev Trotter - À propos'
  } else {
    title = 'Dev Trotter - Blog'
  }

  function onChange(checked) {
    if (checked) {
      setDark(true)
    } else {
      setDark(false)
    }
  }

  return (
    <ThemeProvider theme={!dark ? LightTheme : DarkTheme}>
      <Switch defaultChecked={false} onChange={onChange} />
      <Header pageTitle={title} />
      <Main>
        {children}
      </Main>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
