import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 1. Dependencies
// 2. Components
// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//——*——*——*——*——*——//

const Pwip = () => {
  return (
    <StyledPwip>
      <p>
        Working in Process! <br /> Contents will be prepared soon.🤩
      </p>
    </StyledPwip>
  )
}

const StyledPwip = styled.div`
  width: 100vw;
  height: 100vw;
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  color: white;
  font-size: 2em;
  text-align: center;
  z-index: 1000;
  padding-top: 42vh;
`

export default Pwip
