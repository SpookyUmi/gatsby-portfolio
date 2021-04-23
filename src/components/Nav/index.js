import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

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

  .nav {
  width: 100%;
  display: flex;
  flex-direction: column;

  &__list {
    margin: 0;

    &__elements {
      margin: 0;
      width: 100%;
      height: 48px;
      line-height: 48px;
      list-style: none;
    }

    &__elements a {
      font-family: "Poppins", sans-serif;
      font-size: 0.9rem;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px dotted #e4507550;
    }
  }

  &__list li:last-child a {
    border-bottom: none;
  }

  &-link {
    color: var(--white);
    text-decoration: none;
    margin: 0.8rem;
    transition: var(--transition);

    &--active {
      color: var(--purple);
    }
  }

  &-link:hover {
    color: var(--purple);
  }
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
  </NavStyles>
)


export default Nav;
