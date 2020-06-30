import React from 'react'
//import Helmet from 'react-helmet'
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import SEO from "./seo"

import './all.sass'

const Layout = ({ location, title, summary, description, children }) => {
  return (
    <React.Fragment>
      <SEO title={title} />
      <Header
        location={location}
        title={title}
        summary={summary}
        description={description}
        >
      </Header>
      <Main>{children}</Main>
      <Footer></Footer>
    </React.Fragment>
  )
}

export default Layout
