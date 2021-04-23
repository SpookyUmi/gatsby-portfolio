import React from "react"
import styled from "styled-components";
import github from "../../assets/images/github.svg";
import linkedin from "../../assets/images/linkedin.svg";
import twitter from "../../assets/images/twitter.svg";

const SocialStyles = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0.7rem 0;
  border-top: 1px dotted #e4507550;

  .social-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 46px;
    height: 46px;
    border-radius: 4px;
    margin: 0.2rem;
    transition: background-color 0.3s;
    &:hover {
    background-color: hsla(204, 45%, 98%, 0.15);
    }
  }

  img {
    width: 2.3rem;
    margin-bottom: 0;
  }
`;

const Socials = () => (
  <SocialStyles>
    <a href="https://github.com/SpookyUmi" className="social-buttons">
      <img src={github} alt="github logo" />
    </a>
    <a href="https://www.linkedin.com/in/spookyumi/" className="social-buttons">
      <img src={linkedin} alt="linkedin logo" />
    </a>
    <a href="https://twitter.com/Spooky_Umi" className="social-buttons">
      <img src={twitter} alt="twitter logo" />
    </a>
  </SocialStyles>
)

export default Socials
