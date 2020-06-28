import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 1. Dependencies
// 2. Components
// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//——*——*——*——*——*——//

const PImgTxtCircle = props => {
  const { imgs, title, desc } = props
  var imgNum = imgs.length

  return (
    <StyledPImgTxtCircle>
      <div className="titleWrapper">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
      <div className="itemWrapper">
        {imgs.map(item => {
          const { imgLayout01 } = item
          return (
            <div className="item">
              <div className="imgWrapper">
                <img
                  src={require(`../img/${item.imgSrc}.jpg`)}
                  alt={item.desc}
                />
                <p>{item.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </StyledPImgTxtCircle>
  )
}

const StyledPImgTxtCircle = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 3vw;
  margin-bottom: 8vh;
  @media (max-width: 1024px) {
    height: max-content;
  }

  .titleWrapper {
    width: 94vw;
    display: grid;
    grid-template-columns: 62.66vw 31.33vw;
    margin-bottom: 8vh;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    padding-top: 5vh;
    @media (max-width: 1024px) {
      grid-template-columns: none;
      display: block;
    }
    h1 {
      font-weight: 600;
      font-size: 2.5em;
    }
    p {
      font-weight: 300;
      font-size: 0.8em;
      margin-top: 0.5em;
      @media (max-width: 1024px) {
        width: 80%;
      }
    }
  }

  .itemWrapper {
    width: 90vw;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 2vw;
    margin: 0 auto;
    @media (max-width: 1024px) {
      grid-template-columns: none;
      display: block;
    }
  }

  .item {
    margin: 0 auto;
    text-align: center;
    transition-duration: 1s;
    position: relative;
    :hover p {
      opacity: 0;
    }
    :hover img {
      opacity: 1;
    }
    p {
      width: 100%;
      font-size: 0.9em;
      font-style: italic;
      position: absolute;
      transform: translateY(-50%);
      top: 48%;
      @media (max-width: 1024px) {
        left: 0;
        bottom: 0;
        text-align: left;
        width: 40%;
        transform: translateY(50%);
      }
    }
  }
  .imgWrapper {
    width: 28vw;
    height: 28vw;
    border-radius: 15vw;
    overflow: hidden;
    margin-bottom: 3vh;
    @media (max-width: 1024px) {
      width: 90vw;
      height: 90vw;
      border-radius: 45vw;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.5;
      @media (max-width: 1024px) {
        opacity: 1;
      }
    }
  }
`

export default PImgTxtCircle
