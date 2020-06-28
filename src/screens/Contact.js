import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 1. Dependencies
// 2. Components
// 3. for style
import Logo from '../components/Logo'
import styled from 'styled-components'

// 4. Static Resources

//——*——*——*——*——*——//

const Contact = () => {
  return (
    <div>
      <Logo hide={0} />
      <StyledContact>
        <Intro>
          I’m currently in <span>Seoul, Korea,</span> <br />
          open for <span>internship / part-time job</span>
          <br />
          related to <span>IT / UX projects for products and spaces</span>
        </Intro>
        <ContactHere>
          <img src={require(`../img/email.svg`)} alt="email" />

          <a>iam.seungmee.lee@gmail.com</a>
          <br />
          <img src={require(`../img/insta.svg`)} alt="insta" />

          <a
            href="https://www.instagram.com/_ss_mm_ll"
            target="_blank"
            rel="noopener noreferrer"
          >
            @_ss_mm_ll
          </a>
          <br />
          <img src={require(`../img/linkedin.svg`)} alt="linkedin" />

          <a
            href="https://www.linkedin.com/in/seungmeelee/"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.linkedin.com/seungmee-lee
          </a>
        </ContactHere>
      </StyledContact>
    </div>
  )
}

const StyledContact = styled.div`
  width: 97vw;
  margin-left: 3vw;
  height: 100vh;
  padding-top: 30vh;
  @media (max-width: 1024px) {
    padding-top: 25vh;
    height: 90vh;
    width: 90vw;
    overflow-x: hidden;
    margin-left: 5vw;
  }
`
const Intro = styled.div`
  font-size: 2em;
  color: rgba(256, 256, 256, 0.5);
  & span {
    color: rgba(256, 256, 256, 1);
  }
  @media (max-width: 1024px) {
    font-size: 1.5em;
    width: 90vw;
  }
`
const ContactHere = styled.div`
  margin-top: 10vh;
  margin-left: 3vw;
  color: white;
  line-height: 3;
  cursor: pointer;
  font-size: 0.9em;
  @media (max-width: 1024px) {
    margin-left: 5vw;
    margin-top: 8vh;
  }
  & img {
    width: 1.3em;
    height: 1.3em;
    float: left;
    margin-right: 2vw;
    transform: translateY(60%);
    @media (max-width: 1024px) {
      width: 1.2em;
      height: 1.2em;
      margin-right: 3vw;
    }
  }
`

export default Contact
