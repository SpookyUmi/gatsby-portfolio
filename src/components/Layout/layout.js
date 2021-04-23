import React from "react"
import PropTypes from "prop-types"
import 'normalize.css';
//import "@fontsource/poppins";

import GlobalStyles from '../../styles/GlobalStyles';
import Typography from '../../styles/Typography';
import Navbar from "../Navbar/navbar";
import "./layout.scss";

import categories from "../../data/categories";

const Layout = ({ children }) => {

  return (
    <>
      <GlobalStyles />
      <Typography />
      <Navbar
        siteTitle={`Spooky Umi`}
        categories={categories}
      />
      <div
        className="gatsby-container"
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
