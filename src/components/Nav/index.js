import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import './styles.scss';

const Nav = ({ categories }) => (
  <nav className="nav">
  <ul className="nav__list">
    {categories.map(({ label, route }) => (
      <li className="nav__list__elements">
        <Link
          className="nav-link"
          activeClassName="nav-link--active"
          exact
          to={route}
          key={label}
        >
        {label}
        </Link>
      </li>
    ))}
  </ul>
  <FontAwesomeIcon icon={faGithub} />
  </nav>
)


export default Nav;
