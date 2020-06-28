import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 1. Dependencies
// 2. Components
// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//——*——*——*——*——*——//

const PDrawing = props => {
  const { imgSrc, title, desc } = props
  return (
    <StyledPDrawing>
      <div className="textWrapper">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
      <div className="imgWrapper">
        <img src={require(`../img/${imgSrc}.png`)} alt={imgSrc} />
      </div>
    </StyledPDrawing>
  )
}

const StyledPDrawing = styled.div`
  width: 100vw;
  height: 100vh;
  margin-bottom: 8vh;
  background-color: #dbdbdb;
  padding: 5vh 3vw 3vw 3vw;

  .imgWrapper {
    width: 94vw;
    @media (max-width: 1024px) {
      height: 80vh;
      position: absolute;
      top: 5vh;
      width: 100%;
      left: 0;
    }
    img {
      width: 100%;

      @media (max-width: 1024px) {
        height: 70% !important;
        object-fit: cover;
      }
    }
  }

  @media (max-width: 1024px) {
    padding: 5vw;
    height: 100vh;
    position: relative;
  }
  .textWrapper {
    width: 94vw;
    margin-bottom: 10vh;
    color: black;
    display: grid;
    grid-template-columns: 62.66vw 31.33vw;

    @media (max-width: 1024px) {
      grid-template-columns: none;
      display: block;
      width: 90vw;
      position: absolute;
      top: 65vh;
    }

    h1 {
      font-size: 2.5em;
      font-weight: 600;
      margin: 0;
      padding: 0;
      @media (max-width: 1024px) {
        margin-bottom: 3vh;
        /* font-size:1em; */
      }
    }
    p {
      font-size: 0.8em;
      font-weight: 300;
      margin-top: 0.5em;
      width: 70%;
    }
  }
`

export default PDrawing
