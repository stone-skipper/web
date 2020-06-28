import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 1. Dependencies
// 2. Components

// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//——*——*——*——*——*——//

const PImgComposition = props => {
  const { img1, img2, img3 } = props
  return (
    <StyledPImgComposition>
      <div className="leftWrapper">
        <img src={require(`../img/${img1}.jpg`)} alt={img1} />
      </div>
      <div className="rightWrapper">
        <img src={require(`../img/${img2}.jpg`)} alt={img2} />
        <img src={require(`../img/${img3}.jpg`)} alt={img3} />
      </div>
    </StyledPImgComposition>
  )
}

const StyledPImgComposition = styled.div`
  width: 94vw;
  height: 85vh;
  margin-left: 3vw;
  display: grid;
  grid-gap: 0.5vw;
  margin-bottom: 15vh;
  grid-template-columns: 62.41vw 31.08vw;
  @media (max-width: 1024px) {
    grid-template-rows: 40vh 25vh;
    grid-template-columns: none;
    height: max-content;
    width: 94vw;
    overflow-x: hidden;
  }
  .leftWrapper {
    width: 62.41vw;
    height: 85vh;
    overflow: hidden;
    @media (max-width: 1024px) {
      width: 94vw;
      height: 40vh;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .rightWrapper {
    width: 31.08vw;
    height: 90vh;
    overflow: hidden;
    display: grid;
    grid-gap: 0.5vw;
    grid-template-rows: calc(42.5vh - 0.25vw) calc(42.5vh - 0.25vw);
    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: none;
      height: 25vh;
      width: 94vw;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`

export default PImgComposition
