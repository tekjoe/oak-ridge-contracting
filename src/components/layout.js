import React from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../utils/global"
import { lightTheme } from "../utils/theme"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./organisms/Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
