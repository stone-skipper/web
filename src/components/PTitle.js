import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 1. Dependencies
// 2. Components
// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//——*——*——*——*——*——//

const PTitle = props => {
  const { title } = props
  return (
    <StyledPTitle>
      <p>{title}</p>
    </StyledPTitle>
  )
}

const StyledPTitle = styled.div`
  width: 94vw;
  /* height: 30vh; */
  /* background-color: blue; */
  color: white;
  margin: 0 3vw;
  margin-top: 40vh;
  padding-top: 5vh;
  font-size: 2.8em;
  font-weight: 600;
  border-top: 1px solid white;
`

export default PTitle
