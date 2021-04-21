import React from "react"
import { Link } from "gatsby"
import styled from "styled-components";
import Image from "../components/Image/image"
import Seo from "../components/Seo/seo"

const HomepageStyles = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const IndexPage = () => (
  <HomepageStyles>
    <Seo title="Home" />
    <h1>Hello, world !</h1>
    <p>I'm Chloe Danisevicius alias Spooky Umi.</p>
    <p>I'm a Fullstack Web Developer.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <div className="buttons">
      <button>
        <Link to="/about">About me</Link>
      </button>
      <button>
        <Link to="/portfolio">My portfolio</Link>
      </button>
    </div>
  </HomepageStyles>
)

export default IndexPage
