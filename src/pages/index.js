import React from "react"
import { Link } from "gatsby"
import styled from "styled-components";
import Seo from "../components/Seo/seo"
import background from "../images/sakura2.jpg";

const Background = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
`;

const HomepageStyles = styled.div`
  padding-left: 8rem;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: hsla(240, 43%, 9%, 0.3);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23e6d9fb' fill-opacity='0.26' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  backdrop-filter: blur(4px);
  color: var(--white);

  h2 {
    font-size: 5rem;
  }

  p {
    font-size: 1.5rem;
    line-height: 1.5;
  }

  button {
    margin-right: 1.5rem;
  }
`;

const IndexPage = () => (
  <Background>
    <HomepageStyles>
      <Seo title="Home" />
      <h2>Hello, world !</h2>
      <p>I'm Chloe Danisevicius alias Spooky Umi. <br/>
          I'm a Fullstack Web Developer.
      </p>
      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div> */}
      <div className="buttons">
        <button>
          <Link to="/about">About me</Link>
        </button>
        <button>
          <Link to="/portfolio">My portfolio</Link>
        </button>
      </div>
    </HomepageStyles>
  </Background>
)

export default IndexPage
