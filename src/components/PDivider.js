import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 1. Dependencies
// 2. Components
// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//——*——*——*——*——*——//

const PDivider = () => {
  return <StyledPDivider />
}

const StyledPDivider = styled.div`
  width: 94vw;
  height: 0;
  margin-top: 20vh;
  margin-left: 3vw;
  margin-bottom: 10vh;
  border-top: 1px solid white;
  opacity: 0.2;
`

export default PDivider
