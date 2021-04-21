import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './styles.scss';

const NavStyles = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;

  ul {
    margin: 0;
  }
  li {
    margin: 0;
    width: 100%;
    height: 48px;
    line-height: 48px;
    list-style: none;
  }
  li a {
    font-family: 'Poppins', sans-serif;
  }
`;

const Nav = ({ categories }) => (
  <NavStyles className="nav">
    <ul className="nav__list">
      {categories.map(({ label, route }) => (
        <li
          key={label}
          className="nav__list__elements"
        >
          <Link
            className="nav-link"
            activeClassName="nav-link--active"
            to={route}
            key={label}
          >
          {label}
          </Link>
        </li>
      ))}
    </ul>
    <FontAwesomeIcon icon={faGithub} />
  </NavStyles>
)


export default Nav;
