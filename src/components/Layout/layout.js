import React from "react"
import PropTypes from "prop-types"
import 'normalize.css';

import Navbar from "../Navbar/navbar"
import "./layout.scss"

import categories from "../../data/categories";

const Layout = ({ children }) => {

  return (
    <>
      <Navbar
        siteTitle={`Welcome to Spooky Umi's`}
        categories={categories}
      />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>
        {children}
        </main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
