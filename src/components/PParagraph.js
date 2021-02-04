import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 1. Dependencies
// 2. Components
// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//——*——*——*——*——*——//

const PParagraph = props => {
  const { desc } = props
  return (
    <StyledPParagraph>
      <p>{desc}</p>
    </StyledPParagraph>
  )
}

const StyledPParagraph = styled.div`
  width: 97vw;
  height: max-content;
  color: white;
  margin-left: 3vw;
  padding: 8vh 0;
  @media (max-width: 1024px) {
    margin-left: 5vw;
  }

  p {
    width: 31.33vw;
    font-size: 0.8em;
    line-height: 1.8;
    margin-left: 62.66vw;
    @media (max-width: 1024px) {
      margin-left: 0;
      width: 70vw;
    }
  }
`

export default PParagraph
