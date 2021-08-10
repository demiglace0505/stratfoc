/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"

import Header from './Header.js'
import Footer from "./Footer.js"
import GlobalStyle from '../theme/globalStyles'

const Layout = ({ children }) => {

  return (
    <>
      <GlobalStyle />
      <Header />
        <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
