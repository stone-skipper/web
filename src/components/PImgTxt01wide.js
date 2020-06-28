import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 1. Dependencies
// 2. Components

// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//——*——*——*——*——*——//

const PImgTxt01Wide = props => {
  const { title, desc, imgSrc, txtColor } = props
  // var imgNum = imgs.length
  return (
    <StyledPImgTxt01Wide txtColor={txtColor}>
      <div className="imgWrapper">
        <div className="itemWrapper">
          <img src={require(`../img/${imgSrc}.jpg`)} alt={desc} />
        </div>
        <div className="textWrapper">
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
      </div>
    </StyledPImgTxt01Wide>
  )
}

const StyledPImgTxt01Wide = styled.div`
  width: 100vw;
  height: 100vh;
  margin-bottom: 15vh;
  @media (max-width: 1024px) {
    height: max-content;
  }
  .imgWrapper {
    width: 100vw;
    height: 100vh;

    position: relative;
    @media (max-width: 1024px) {
      height: max-content;
      display: flex;
      flex-direction: column-reverse;
      align-items: flex-start;
      align-content: flex-start;
      flex-wrap: wrap;
      justify-content: flex-end;
    }
    .textWrapper {
      position: absolute;
      top: 0;
      width: 94vw;
      height: max-content;
      color: ${props => props.txtColor};
      margin-top: 5vh;
      margin-left: 3vw;
      display: grid;
      grid-template-columns: 62.66vw 31.33vw;
      @media (max-width: 1024px) {
        display: block;
        width: 90vw;
        color: white;
        margin-bottom: 0;
        margin-top: 0;
        margin-left: 5vw;
        position: static;
      }
      h1 {
        font-size: 2.5em;
        font-weight: 600;
      }
      p {
        font-size: 0.8em;
        font-weight: 300;
      }
    }
  }

  .itemWrapper {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
    @media (max-width: 1024px) {
      height: 35vh;
      position: static;
    }
    img {
      width: 100%;
      height: 100% !important;
      object-fit: cover;
    }
  }
`

export default PImgTxt01Wide
