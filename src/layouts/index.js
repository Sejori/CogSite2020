import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/SEO'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../scss/style.scss'

const Layout = props => {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }

  return (
    <React.Fragment>
      <SEO />
      <div className={`page${props.bodyClass ? ` ${props.bodyClass}` : ''}`}>
        <div id="wrapper" className="wrapper">
          <Header />
          {props.children}
        </div>
        <Link id="back-to-top" to={(typeof window != "undefined") ? window.location.pathname : "/"} className="inactive">
          <strong>top ^</strong>
        </Link>
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Layout
