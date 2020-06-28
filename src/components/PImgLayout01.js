import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 1. Dependencies
// 2. Components
// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//——*——*——*——*——*——//

const PImgLayout01 = props => {
  const { imgSrc } = props
  return (
    <StyledPImgLayout01>
      <img src={require(`../img/${imgSrc}.jpg`)} alt={imgSrc} />
    </StyledPImgLayout01>
  )
}

const StyledPImgLayout01 = styled.div`
  width: 100vw;
  height: max-content;
  padding: 3vw;
  margin-bottom: 15vh;

  img {
    width: 94vw;
  }
`

export default PImgLayout01
