import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 1. Dependencies
// 2. Components
// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//——*——*——*——*——*——//

const PImgTxt03 = props => {
  const {
    imgSrc,
    detail,
    bg,
    txt1,
    txt2,
    txt3,
    desc1,
    desc2,
    desc3,
    title
  } = props
  return (
    <StyledPImgTxt03 bg={bg}>
      <div className="titleWrapper">
        <h1>{title}</h1>
        <p>{detail}</p>
      </div>

      <div className="imgWrapper">
        <img src={require(`../img/${imgSrc}.jpg`)} alt={imgSrc} />
      </div>
      <div className="txtPlacer">
        <div className="txtWrapper">
          <p>01&nbsp;&nbsp;&nbsp;&nbsp;{txt1}</p>
          <p>{desc1}</p>
        </div>
        <div className="txtWrapper">
          <p>02&nbsp;&nbsp;&nbsp;&nbsp;{txt2}</p>
          <p>{desc2}</p>
        </div>
        <div className="txtWrapper">
          <p>03&nbsp;&nbsp;&nbsp;&nbsp;{txt3}</p>
          <p>{desc3}</p>
        </div>
      </div>
    </StyledPImgTxt03>
  )
}

const StyledPImgTxt03 = styled.div`
  width: 100vw;
  height: max-content;
  margin-bottom: 15vh;
  display: grid;
  grid-template-rows: 75vh 25vh;
  grid-gap: 5vh;
  position: relative;
  .titleWrapper {
    width: 94vw;
    padding: 3vw;
    height: max-content;
    position: absolute;
    z-index: 10;
    h1 {
      font-size: 2.5em;
      font-weight: 600;
      margin: 0;
      padding: 0;
      margin-bottom: 2vh;
    }
    p {
      font-size: 0.8em;
      font-weight: 300;
    }
  }
  .imgWrapper {
    width: 100vw;
    height: 75vh;
    background-color: ${props => props.bg};
    text-align: right;
    img {
      height: 100% !important;
      object-fit: contain;
    }
  }
  .txtPlacer {
    width: 94vw;
    height: 15vh;
    display: grid;
    grid-template-columns: 31.33vw 31.33vw 31.33vw;
    grid-gap: 0;
    margin-left: 3vw;
    color: white;
  }

  .txtWrapper {
    width: 30vw;

    p:nth-of-type(1) {
      font-weight: 600;
      width: 70%;
      font-size: 1em;
    }
    p:nth-of-type(2) {
      width: 80%;
      font-size: 0.8em;
      line-height: 1.5;
    }
  }
`

export default PImgTxt03
