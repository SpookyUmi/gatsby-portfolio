import { Link } from "gatsby"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { fab } from '@fortawesome/free-solid-svg-icons'

import './styles.scss';

const Nav = ({ categories }) => (
  <nav className="nav">
  {categories.map(({ label, route }) => (
    <Link
      className="nav-link"
      activeClassName="nav-link--active"
      exact
      to={route}
      key={label}
    >
    {label}
    </Link>

  ))}
  <FontAwesomeIcon icon="coffee" />
  </nav>
)


export default Nav;
