import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 1. Dependencies
// 2. Components
// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//——*——*——*——*——*——//

const PImgLayout03 = props => {
  const { imgSrc1, imgSrc2, imgSrc3 } = props

  return (
    <StyledPImgLayout03>
      <img src={require(`../img/${imgSrc1}.jpg`)} alt={imgSrc1} />
      <img src={require(`../img/${imgSrc2}.jpg`)} alt={imgSrc2} />
      <img src={require(`../img/${imgSrc3}.jpg`)} alt={imgSrc3} />
    </StyledPImgLayout03>
  )
}

const StyledPImgLayout03 = styled.div`
  width: 100vw;
  height: max-height;
  padding: 3vw;
  display: grid;
  grid-template-columns: repeat(2, 46.75vw);
  grid-column-gap: 0.5vw;
  grid-row-gap: 0.5vw;
  margin-bottom: 5vh;
  img {
    width: 46.75vw;
  }
`

export default PImgLayout03
