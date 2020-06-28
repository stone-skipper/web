import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 1. Dependencies
// 2. Components
// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//——*——*——*——*——*——//

const PImgTxt02 = props => {
  const { imgSrc, title, desc } = props
  return (
    <StyledPImgTxt02>
      <div className="imgWrapper">
        <img src={require(`../img/${imgSrc}.jpg`)} alt={title} />
      </div>
      <div className="textWrapper">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </StyledPImgTxt02>
  )
}

const StyledPImgTxt02 = styled.div`
  width: 100vw;
  height: max-content;
  padding: 0 3vw;
  margin-bottom: 15vh;
  display: grid;
  grid-template-columns: 62.66vw 31.33vw;
  @media (max-width: 1024px) {
    grid-template-columns: none;
    display: block;
    padding: 0;
  }

  .imgWrapper {
    width: 60vw;
    max-height: 80vh;
    overflow: hidden;
    @media (max-width: 1024px) {
      width: 80vw;
      height: 70vh;
      margin-left: 20vw;
    }

    img {
      width: 100%;
      height: 100% !important;
      object-fit: cover;
    }
  }

  .textWrapper {
    color: white;
    h1 {
      font-size: 2.5em;
      font-weight: 600;
      margin-bottom: 10vh;
      @media (max-width: 1024px) {
        margin-bottom: 0;
      }
    }
    p {
      font-size: 0.8em;
      font-weight: 300;
      margin-top: 0.5em;
    }
    @media (max-width: 1024px) {
      width: 70vw;
      margin-left: 5vw;
    }
  }
`

export default PImgTxt02
