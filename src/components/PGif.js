import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 1. Dependencies
// 2. Components
// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//——*——*——*——*——*——//

const PGif = props => {
  const { title, desc, imgSrc, full } = props

  return (
    <StyledPGIf full={full}>
      <div className="imgWrapper">
        <div className="itemWrapper">
          <img src={require(`../img/${imgSrc}.gif`)} alt={desc} />
        </div>
      </div>
      <div className="textWrapper">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </StyledPGIf>
  )
}

const StyledPGIf = styled.div`
  width: 100vw;
  height: 90vh;
  padding: 0 3vw;
  color: white;
  margin-bottom: ${props => (props.full ? '15vh' : '8vh')};
  @media (max-width: 1024px) {
    height: max-content;
  }
  .imgWrapper {
    margin-top: 2vh;
    width: 94vw;
    height: ${props => (props.full ? '90vh' : '75vh')};
    display: grid;
    grid-template-columns: repeat(${props => props.imgNum}, 1fr);
  }

  .itemWrapper {
    width: calc(94vw / ${props => props.imgNum} - 5px);
    height: ${props => (props.full ? '90vh' : '75vh')};
    overflow: hidden;
    position: relative;

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
      font-weight: 600;
      font-size: 0.8em;
    }
  }
  .textWrapper {
    width: 94vw;
    margin-top: 3vh;
    display: grid;
    grid-template-columns: 62.66vw 31.33vw;
    @media (max-width: 1024px) {
      grid-template-columns: none;
      display: block;
    }
    h1 {
      font-size: 2.5em;
      font-weight: 600;
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

export default PGif
