import { Link } from "gatsby"
import React from "react"

import './styles.scss';

const Nav = () => (
  <nav>
    <Link
      className="nav-link"
      to="/blog"
    >Blog</Link>
    <Link
      to="/cv"
    >Télécharger mon CV</Link>
    <Link
      to="/about"
    >A propos</Link>
  </nav>
)


export default Nav;
