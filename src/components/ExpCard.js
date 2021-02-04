import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 1. Dependencies
// 2. Components
// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//——*——*——*——*——*——//

const ExpCard = props => {
  const { year, imgSrc, title, desc } = props

  return (
    <StyledExpCard>
      <h1>{year}</h1>
      <div>
        <img src={require(`../img/${imgSrc}.jpg`)} alt="blah2" />
      </div>
      <h2>{title}</h2>
      <p>{desc}</p>
    </StyledExpCard>
  )
}

const StyledExpCard = styled.div`
  width: 15vw;
  height: 40vh;
  color: white;
  filter: grayscale() brightness(0.8);
  float: left;
  margin-right: 1vw;
  margin-top: 1em;
  @media (max-width: 1024px) {
    width: 80vw;
    height: 60vh;
    margin-right: 2vw;
  }
  & h1 {
    width: 100%;
    font-size: 0.6em;
    text-align: right;
    margin-bottom: 0.6em;
  }
  & h2 {
    font-size: 0.8em;
    text-align: left;
    margin-top: 0.6em;
    font-weight: 600;
    line-height: 1.5;
    @media (max-width: 1024px) {
      font-size: 1em;
    }
  }
  & p {
    font-size: 0.6em;
    line-height: 1.5;
    padding-top: 0.8em;
    opacity: 0.3;
    transition: 0.4s;
    @media (max-width: 1024px) {
      font-size: 1em;
      opacity: 0.5;
    }
  }
  & img {
    width: 100%;
    object-fit: contain;
  }
  :hover {
    filter: grayscale(0) brightness(1);
  }
  :hover p {
    opacity: 1;
  }
`

export default ExpCard
