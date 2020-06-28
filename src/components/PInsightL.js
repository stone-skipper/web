import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 1. Dependencies
// 2. Components
// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//——*——*——*——*——*——//

const PInsightL = props => {
  const { number, title, desc, imgSrc } = props
  return (
    <StyledPInsightL>
      <div className="textWrapper">
        <p>{number}</p>
        <h1>{title}</h1>
        <h2>{desc}</h2>
      </div>
      <div className="imgWrapper">
        <img src={require(`../img/${imgSrc}.png`)} alt={title} />
        <div className="circle"> </div>
      </div>
    </StyledPInsightL>
  )
}

const StyledPInsightL = styled.div`
  width: 85vw;
  height: 80vh;
  display: grid;
  grid-template-columns: 25vw 55vw;
  margin-left: 12vw;
  align-content: center;
  .textWrapper {
    width: 25vw;

    p {
      font-weight: 600;
    }
    h1 {
      font-weight: 600;
      width: 25vw;
      line-height: 1.5;
    }
    h2 {
      margin-top: 5vh;
      width: 25vw;
      line-height: 1.5;
      font-weight: 300;
      font-size: 0.8em;
    }
  }

  .imgWrapper {
    width: 60vw;
    position: relative;
  }
  img {
    width: 100%;
    max-height: 80vh;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    object-fit: contain;
    z-index: 10;
    transform: translateY(-50%);
    text-align: center;
    top: 50%;
  }
  .circle {
    display: block;
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    width: 30vw;
    height: 30vw;
    border-radius: 15vw;
    background-color: rgba(255, 255, 255, 0.1);
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
    left: 50%;
  }
`

export default PInsightL
