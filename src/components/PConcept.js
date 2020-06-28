import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 1. Dependencies
// 2. Components
// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//——*——*——*——*——*——//

const PConcept = props => {
  const { desc, concept, imgSrc, txtColor, user, bkWrapper } = props
  var textColor = txtColor

  return (
    <StyledPConcept textColor={textColor} bkWrapper={bkWrapper}>
      <img src={require(`../img/${imgSrc}.jpg`)} alt={desc} />
      <div className="bkWrapper" />
      <div className="wrapper">
        <div className="concept">{concept}</div>
        <div className="for">
          for <span>{user}</span>
        </div>
      </div>
      <p className="desc">{desc}</p>
    </StyledPConcept>
  )
}

const StyledPConcept = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin-bottom: 15vh;
  position: relative;

  img {
    width: 100%;
    height: 100% !important;
    z-index: 0;
    object-fit: cover;
  }
  .bkWrapper {
    width: 100vw;
    height: 100vh;
    background-color: black;
    opacity: ${props => props.bkWrapper};
    position: absolute;
    top: 0;
  }
  .wrapper {
    z-index: 10;
    margin: 0;
    position: absolute;
    left: 3vw;
    width: 100%;
    color: ${props => props.textColor};
    font-size: 3em;
    top: 50%;
    -ms-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    font-family: 'Titillium Web';
    display: inline-block;
    font-style: italic;
    font-weight: 300;
    line-height: 3;
    .concept {
      h1 {
        margin: 0;
        padding: 0;
        font-weight: 300;
        font-size: 1em;
      }
    }
    .for {
      span {
        padding-bottom: 1vh;
        border-bottom: 2px solid ${props => props.textColor};
      }
    }
    @media (max-width: 1024px) {
      left: 5vw;
      top: 5vw;
      -ms-transform: translateY(0%);
      -webkit-transform: translateY(0%);
      transform: translateY(0%);
    }
  }
  .concept {
    span {
      font-weight: 600;
    }
  }

  .desc {
    z-index: 10;
    width: 28vw;
    margin-left: 62.66vw;
    position: absolute;
    color: ${props => props.textColor};
    top: 75%;
    left: 3vw;
    font-size: 0.8em;
    @media (max-width: 1024px) {
      left: 5vw;
      margin-left: 0;
      width: 80%;
    }
  }
`

StyledPConcept.defaultProps = {
  bkWrapper: 0
}

export default PConcept
