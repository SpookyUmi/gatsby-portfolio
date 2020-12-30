import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './styles.scss';
import Nav from '../Nav/index';

const Header = ({ siteTitle, categories }) => (
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
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
