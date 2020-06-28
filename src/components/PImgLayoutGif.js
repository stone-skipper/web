import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 1. Dependencies
// 2. Components
// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//——*——*——*——*——*——//

const PImgLayoutGif = props => {
  const { imgSrc } = props
  return (
    <StyledPImgLayoutGif>
      <img src={require(`../img/${imgSrc}.gif`)} alt={imgSrc} />
    </StyledPImgLayoutGif>
  )
}

const StyledPImgLayoutGif = styled.div`
  width: 100vw;
  height: max-content;
  padding: 3vw;
  margin-bottom: 8vh;

  img {
    width: 94vw;
  }
`

export default PImgLayoutGif
