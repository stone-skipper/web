import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 1. Dependencies
// 2. Components
// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//——*——*——*——*——*——//

const POverview = props => {
  const { question, title } = props

  return (
    <StyledPOverview>
      <div>{question}</div>
    </StyledPOverview>
  )
}

const StyledPOverview = styled.div`
  /* scroll-snap-align: start; */
  font-style: italic;
  font-weight: 100;
  width: 100vw;
  overflow: hidden;
  margin-bottom: 5px;

  div {
    width: 50vw;
    @media (max-width: 1024px) {
      width: 70vw;
    }
  }
  p {
    width: 70vw;
    font-size: 2.5em;
    margin-top: 20vh;
    margin-bottom: 20vh;
    line-height: 1.8;
    text-align: left;
    margin-left: 3vw;
    @media (max-width: 1024px) {
      margin-left: 5vw;
    }
  }
  span {
    font-weight: 600;
  }
`

export default POverview
