import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 1. Dependencies
// 2. Components
// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//——*——*——*——*——*——//

const PResearch = props => {
  const { title, desc, imgs_odd, imgs_even } = props
  return (
    <StyledPResearch>
      <div className="textWrapper">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
      <div className="animWrapper">
        <div className="sect_odd">
          {imgs_odd.map(item => {
            const { research_odd } = item
            return (
              <div className="itemWrapper">
                <img
                  src={require(`../img/${item.imgSrc}.jpg`)}
                  alt={item.desc}
                />
                <p>{item.desc}</p>
              </div>
            )
          })}
        </div>
        <div className="sect_even">
          {imgs_even.map(item => {
            const { research_even } = item
            return (
              <div className="itemWrapper">
                <img
                  src={require(`../img/${item.imgSrc}.jpg`)}
                  alt={item.desc}
                />
                <p>{item.desc}</p>
              </div>
            )
          })}
        </div>
        <div className="sect_odd_last">
          {imgs_odd.map(item => {
            const { research_odd } = item
            return (
              <div className="itemWrapper">
                <img
                  src={require(`../img/${item.imgSrc}.jpg`)}
                  alt={item.desc}
                />
                <p>{item.desc}</p>
              </div>
            )
          })}
        </div>
        <div className="sect_even_last">
          {imgs_even.map(item => {
            const { research_even } = item
            return (
              <div className="itemWrapper">
                <img
                  src={require(`../img/${item.imgSrc}.jpg`)}
                  alt={item.desc}
                />
                <p>{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </StyledPResearch>
  )
}

const StyledPResearch = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.05);
  overflow: hidden;
  margin-bottom: 10vh;
  .textWrapper {
    position: absolute;
    left: 3vw;
    display: grid;
    z-index: 10;
    grid-template-columns: 62.66vw 31.33vw;
    margin-top: 50vh;
    @media (max-width: 1024px) {
      grid-template-columns: none;
      display: block;
      left: 5vw;
      -ms-transform: translateY(-50%);
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
    }
    h1 {
      font-size: 2.5em;
      font-weight: 600;
      -ms-transform: translateY(-50%);
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      @media (max-width: 1024px) {
        width: 80%;
        transform: none;
      }
    }
    p {
      font-size: 0.8em;
      line-height: 1.8;
      -ms-transform: translateY(-50%);
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      @media (max-width: 1024px) {
        width: 80%;
        transform: none;
      }
    }
  }
  .animWrapper {
    width: 100vw;
    position: relative;
    animation: circleFlow 15s infinite linear;
    filter: saturate(0.5);
    -webkit-filter: saturate(0.5);
  }
  .sect_odd {
    display: grid;
    position: absolute;
    top: 0;
    margin: 0 auto;
    grid-template-columns: repeat(3, 20vw);
    grid-column-gap: 10vw;
    grid-row-gap: 30vw;
    margin-left: 10vw;
    animation: circleFlow 15s infinite linear;
    @media (max-width: 1024px) {
      grid-column-gap: 15vw;
      grid-row-gap: 50vw;
      animation: mobileCircleFlow 15s infinite linear;
    }
  }
  .sect_even {
    display: grid;
    position: absolute;
    top: 25vw;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 10vw;
    grid-row-gap: 30vw;
    margin-left: -5vw;
    transform: translate3d(0, 0, 0);
    animation: circleFlow 15s infinite linear;
    @media (max-width: 1024px) {
      grid-column-gap: 15vw;
      grid-row-gap: 50vw;
      top: 35vw;
      animation: mobileCircleFlow 15s infinite linear;
    }
  }
  .sect_odd_last {
    display: grid;
    position: absolute;
    top: 150vw;
    margin: 0 auto;
    grid-template-columns: repeat(3, 20vw);
    grid-column-gap: 10vw;
    grid-row-gap: 30vw;
    margin-left: 10vw;
    animation: circleFlow 15s infinite linear;
    /* animation-delay: 115s; */
    @media (max-width: 1024px) {
      grid-column-gap: 15vw;
      grid-row-gap: 50vw;
      top: 210vw;
      animation: mobileCircleFlow 15s infinite linear;
    }
  }
  .sect_even_last {
    display: grid;
    position: absolute;
    top: 175vw;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 10vw;
    grid-row-gap: 30vw;
    margin-left: -5vw;
    transform: translate3d(0, 0, 0);
    animation: circleFlow 15s infinite linear;
    @media (max-width: 1024px) {
      grid-column-gap: 15vw;
      grid-row-gap: 50vw;
      top: 245vw;
      animation: mobileCircleFlow 15s infinite linear;
    }
  }

  .itemWrapper {
    width: 20vw;
    height: 20vw;
    border-radius: 10vw;
    overflow: hidden;
    transform: scale(1.2);
    @media (max-width: 1024px) {
      transform: scale(1.5);
    }

    img {
      width: 100%;
      object-fit: cover;
      opacity: 0.5;
    }
    p {
      color: white;
      font-size: 0.6em;
      font-weight: 600;
      text-align: center;
      opacity: 0.3;
      z-index: 10;
      margin-top: -50%;
      -ms-transform: translateY(-50%);
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      @media (max-width: 1024px) {
        display: none;
      }
    }
  }

  @keyframes mobileCircleFlow {
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(-131%);
    }
  }

  @keyframes circleFlow {
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(-125%);
    }
  }
`

export default PResearch
