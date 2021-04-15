import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import Image from "../components/Image/image"
import SEO from "../components/Seo/seo"
import Presentation from "../components/Presentation/index"

import homepage from "../data/homepage";

const Resume = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello, world !</h1>
    <Presentation text={homepage.text} />
    <p>I'm Chloe Danisevicius alias Spooky Umi.</p>
    <p>I'm a Fullstack Web Developer.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default Resume;
