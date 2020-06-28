import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 1. Dependencies
// 2. Components

// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//——*——*——*——*——*——//

const PImgTxt01 = props => {
  const { title, desc, imgs } = props
  var imgNum = imgs.length
  return (
    <StyledPImgTxt01 imgNum={imgNum}>
      <div className="imgWrapper">
        {imgs.map(item => {
          const { imgLayout01 } = item
          return (
            <div className="itemWrapper" key={item.imgSrc}>
              <img src={require(`../img/${item.imgSrc}.jpg`)} alt={item.desc} />
              <p>{item.desc}</p>
            </div>
          )
        })}
      </div>
      <div className="textWrapper">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </StyledPImgTxt01>
  )
}

const StyledPImgTxt01 = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 5vw 3vw 3vw 3vw;
  color: white;
  margin-bottom: 15vh;
  @media (max-width: 1024px) {
    padding: 0;
    height: max-content;
  }
  .imgWrapper {
    margin-top: 2vh;
    width: 94vw;
    height: 70vh;
    display: grid;
    grid-template-columns: repeat(${props => props.imgNum}, 1fr);
    @media (max-width: 1024px) {
      width: 100vw;
      height: calc(40vh * ${props => props.imgNum});
      grid-template-rows: repeat(${props => props.imgNum}, 40vh);
      grid-template-columns: none;
      grid-gap: 5px;
    }
  }

  .itemWrapper {
    width: calc(94vw / ${props => props.imgNum} - 5px);
    height: 70vh;
    overflow: hidden;
    position: relative;
    @media (max-width: 1024px) {
      width: 100vw;
      height: 40vh;
    }

    img {
      width: 100%;
      height: 100% !important;
      object-fit: cover;
    }

    p {
      position: absolute;
      top: 1vw;
      left: 1vw;
      z-index: 10;
      font-weight: 300;
      font-size: 1em;
      font-style: italic;
      @media (max-width: 1024px) {
        top: 3vw;
        left: 3vw;
        font-size: 0.8em;
      }
    }
  }
  .textWrapper {
    width: 94vw;
    margin-top: 3vh;
    display: grid;
    grid-template-columns: 62.66vw 31.33vw;
    @media (max-width: 1024px) {
      display: block;
      margin-left: 5vw;
      width: 90vw;
      margin-top: 5vh;
    }
    h1 {
      font-size: 2.5em;
      font-weight: 600;
      /* @media (max-width: 1024px) {
        font-size: 1em;
      } */
    }
    p {
      font-size: 0.8em;
      font-weight: 300;
      margin-top: 0.5em;
      @media (max-width: 1024px) {
        width: 80%;
      }
    }
  }
`

export default PImgTxt01
