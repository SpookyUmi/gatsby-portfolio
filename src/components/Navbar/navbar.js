import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './styles.scss';
import Nav from '../Nav/index';

const Navbar = ({ siteTitle, categories }) => (
  <header className="header">
    <div className="header-container">
      <h1 className="header-title">
        <Link
          to="/"
          className="header-title-link"
          >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <Nav categories={categories}/>
    <p>
      © Spooky Umi {new Date().getFullYear()}
          {` `}
          Built with ❤️ and <a href="https://www.gatsbyjs.com">Gatsby</a>
          {` `}
    </p>
  </header>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
