import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 1. Dependencies
// 2. Components
// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//——*——*——*——*——*——//

const PCover = props => {
  const { title, desc, type, year, detail, imgSrc, icons, bkwrapper } = props

  var imgNum = icons.length
  return (
    <StyledPCover imgSrc={imgSrc} imgNum={imgNum} bkwrapper={bkwrapper}>
      <div className="imgWrapper">
        <img src={require(`../img/${imgSrc}.jpg`)} alt={title} />
      </div>
      <div className="blackWrapper" />
      <div className="titleWrapper">
        <h1>{title}</h1>
        <h2>{desc}</h2>
      </div>
      <div className="descWrapper">
        <p>{type}</p>
        <p>·</p>
        <p>{year}</p>
        <p>·</p>
        <p>{detail}</p>
      </div>

      <div className="iconWrapper">
        {icons.map(item => {
          const { projectIcons } = item
          if (icons === 'undefined') {
            return null
          }
          return (
            <div className="icon" key={item.imgSrc}>
              <img
                src={require(`../img/${item.imgSrc}.png`)}
                alt={item.imgSrc}
              />
            </div>
          )
        })}
      </div>
    </StyledPCover>
  )
}

const StyledPCover = styled.div`
  /* scroll-snap-align: start; */

  color: white;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  margin-bottom: 5px;
  .blackWrapper {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    background-color: black;
    opacity: ${props => (props.bkwrapper ? 0.7 : 0)};
    z-index: 9;
  }
  .imgWrapper {
    width: 100vw;
    height: 100vh;
  }
  img {
    width: 100%;
    height: 100% !important;
    object-fit: cover;

    /* margin-top: -30vh; */
    @media (max-width: 1024px) {
      width: 100%;
      height: 100% !important;
      object-fit: cover;
      margin-top: 0;
    }
  }

  .titleWrapper {
    position: absolute;
    z-index: 10;
    top: 3vw;
    left: 3vw;
    width: 50vw;
    @media (max-width: 1024px) {
      top: 5vw;
      left: 5vw;
    }
    h1 {
      font-size: 4em;
      font-weight: 600;
      @media (max-width: 1024px) {
        font-size: 3em;
      }
    }
    h2 {
      font-size: 4em;
      font-weight: 100;
      line-height: 1.5;
      @media (max-width: 1024px) {
        font-size: 3em;
      }
    }
    @media (max-width: 1024px) {
      width: 80vw;
    }
  }

  .descWrapper {
    position: absolute;
    z-index: 10;
    bottom: 3vw;
    left: 3vw;
    width: 50vw;
    padding-top: 2em;
    @media (max-width: 1024px) {
      bottom: 3vw;
      left: 5vw;
    }
    p {
      font-size: 0.9em;
      text-align: left;
      line-height: 0.8;
      float: left;
      margin-right: 1em;
      @media (max-width: 1024px) {
        font-size: 0.8em;
      }
    }
    @media (max-width: 1024px) {
      width: 100vw;
    }
  }
  .iconWrapper {
    position: absolute;
    right: 3vw;
    bottom: 3vw;
    z-index: 11;
    height: 5vw;
    max-width: 31.33vw;
    display: grid;
    align-items: center;
    grid-column-gap: 3vw;
    grid-template-columns: repeat(${props => props.imgNum}, 1fr);
    @media (max-width: 1024px) {
      bottom: 18vw;
      left: 5vw;
    }
    .icon {
      height: 3vw;
    }
    img {
      max-height: 4vw;
      min-height: 3vw;
      max-width: 7vw;
      padding: 0;
      object-fit: contain;
      transform: translateY(50%);
      @media (max-width: 1024px) {
        max-height: 20vw;
        max-width: 10vw;
        min-height: 15vw;
        transform: translateY(-50%);
      }
    }
  }
`

export default PCover
