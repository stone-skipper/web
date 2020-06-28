import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 1. Dependencies
// 2. Components
// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//——*——*——*——*——*——//

const PInsightLR = props => {
  const { imgs, title, desc } = props
  return (
    <StyledPInsightLR>
      <div className="titleWrapper">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
      <div className="itemWrapper">
        {imgs.map(item => {
          const { insight } = item
          return (
            <div className="item">
              <div className="imgWrapper">
                <img
                  src={require(`../img/${item.imgSrc}.png`)}
                  alt={item.desc}
                />
                <div className="circle" />
              </div>
              <div className="textWrapper">
                <p>
                  {item.number}&nbsp;&nbsp;&nbsp;&nbsp;
                  {item.title}
                </p>
                <h2>{item.desc}</h2>
              </div>
            </div>
          )
        })}
      </div>
    </StyledPInsightLR>
  )
}

const StyledPInsightLR = styled.div`
  width: 100vw;
  padding-left: 3vw;
  display: grid;
  padding-top: 3vw;
  margin-bottom: 10vh;
  background-color: rgba(255, 255, 255, 0.05);
  @media (max-width: 1024px) {
    padding-left: 5vw;
    padding-top: 5vw;
  }

  .titleWrapper {
    color: white;
    display: grid;
    grid-template-columns: 62.66vw 31.33vw;
    @media (max-width: 1024px) {
      grid-template-columns: none;
      display: block;
      margin-bottom: 10vh;
    }
    h1 {
      font-size: 2.5em;
      font-weight: 600;
      width: 100%;
      line-height: 1.3;
    }
    p {
      font-size: 0.8em;
      font-weight: 300;
      @media (max-width: 1024px) {
        width: 80%;
      }
    }
  }
  .itemWrapper {
    width: 94vw;
    text-align: left;
    display: grid;
    grid-template-columns: 31.33vw 31.33vw 31.33vw;
    @media (max-width: 1024px) {
      grid-template-columns: none;
      display: block;
    }
  }

  .item {
    width: 31.33vw;
    height: max-content;
    margin-bottom: 2vh;
    @media (max-width: 1024px) {
      width: 90vw;
    }
  }

  .textWrapper {
    width: 100%;
    margin-left: 3vw;
    @media (max-width: 1024px) {
      margin-bottom: 5vh;
    }
    p {
      font-weight: 600;
    }
    h1 {
      font-size: 1em;
      font-weight: 600;
      line-height: 1.3;
      width: 80%;
      margin-top: 1vh;
    }

    h2 {
      font-size: 0.8em;
      font-weight: 300;
      line-height: 1.5;
      width: 80%;
      display: block;
    }
  }
  .imgWrapper {
    width: 32vw;
    height: 32vw;
    position: relative;
    margin-top: 8vh;
    margin-bottom: 10vh;
    @media (max-width: 1024px) {
      width: 90vw;
      height: 80vw;
      margin-bottom: 5vh;
    }

    img {
      width: 32vw;
      object-fit: contain;
      position: absolute;
      display: block;
      top: 50%;
      transform: translateY(-50%);
      text-align: center;
      z-index: 10;
      @media (max-width: 1024px) {
        width: 90vw;
      }
    }
    .circle {
      width: 25vw;
      height: 25vw;
      border-radius: 12.5vw;
      position: absolute;
      display: block;
      background-color: rgba(255, 255, 255, 0.05);
      top: 50%;
      transform: translateY(-50%) translateX(-50%);
      left: 50%;
      @media (max-width: 1024px) {
        width: 60vw;
        height: 60vw;
        border-radius: 30vw;
      }
    }
  }
`

export default PInsightLR
