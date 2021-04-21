import React from "react"
import { Link } from "gatsby"

import Image from "../components/Image/image"
import Seo from "../components/Seo/seo"

const Portfolio = () => (
  <>
    <Seo title="Home" />
    <h1>Hello, world !</h1>
    <p>I'm Chloe Danisevicius alias Spooky Umi.</p>
    <p>I'm a Fullstack Web Developer.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </>
)

export default Portfolio;
