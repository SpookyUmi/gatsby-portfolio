import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components";
import Logo from "../Image/image"
import Socials from "../Socials/socials"

import './styles.scss';
import Nav from '../Nav/index';

const HeaderStyles = styled.header`
  .header-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 1.5rem;
    border-bottom: 1px dotted #e4507550;
  }

  .header-container h1 {
    margin-top: 0.5rem;
  }

  p {
    margin-bottom: 0;
    padding: 1.2rem;
    color: var(--white);
    background-color: var(--purple);
    font-size: 0.8rem;
    text-align: center;
    line-height: 1.4;
  }

  p a {
    transition: var(--transition);
  }

  p a:hover {
    color: var(--darker);
  }
`;

const Navbar = ({ siteTitle, categories }) => (
  <HeaderStyles className="header">
    <div className="header-container">
      <Link
        to="/"
        className="header-title-link"
        >
          <Logo />
      </Link>
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
    <Socials />
    <p>
      © Spooky Umi {new Date().getFullYear()}
          {` `}
          Built with ❤️ and <a href="https://www.gatsbyjs.com">Gatsby</a>
          {` `}
    </p>
  </HeaderStyles>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
