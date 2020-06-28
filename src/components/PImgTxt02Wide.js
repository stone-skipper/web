import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 1. Dependencies
// 2. Components
// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//——*——*——*——*——*——//

const PImgTxt02Wide = props => {
  const { imgSrc, title, desc, txtColor } = props
  return (
    <StyledPImgTxt02Wide txtColor={txtColor}>
      <div className="imgWrapper">
        <div className="itemWrapper">
          <img src={require(`../img/${imgSrc}.jpg`)} alt={title} />
        </div>
      </div>
      <div className="textWrapper">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </StyledPImgTxt02Wide>
  )
}

const StyledPImgTxt02Wide = styled.div`
  width: 100vw;
  height: 100vh;
  margin-bottom: 15vh;
  overflow: hidden;
  position: relative;
  @media (max-width: 1024px) {
    height: 75vh;
  }
  .imgWrapper {
    width: 100vw;
    height: 100vh;

    position: relative;
  }
  .itemWrapper {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;

    @media (max-width: 1024px) {
      height: 75vh;
    }
    img {
      width: 100%;
      height: 100% !important;
      object-fit: cover;
    }
  }

  .textWrapper {
    width: 31.33vw;
    position: absolute;
    left: calc(62.66vw + 3vw);
    top: 50vh;
    color: ${props => props.txtColor};
    h1 {
      font-size: 2.5em;
      font-weight: 600;
      margin-bottom: 10vh;
    }
    p {
      width: 70%;
      font-size: 0.8em;
      font-weight: 300;
      @media (max-width: 1024px) {
        width: 100%;
      }
    }
    @media (max-width: 1024px) {
      width: 45vw;
      position: absolute;
      left: 50vw;
    }
  }
`

export default PImgTxt02Wide
