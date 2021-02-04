import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 1. Dependencies
// 2. Components
// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//——*——*——*——*——*——//

const POutro = props => {
  const { line1, line2 } = props
  return (
    <StyledPOutro>
      <h1>{line1}</h1>
      {line2}
      <p>Copyright ⓒ 2020 By seungmee lee. All right reserved.</p>
    </StyledPOutro>
  )
}

const StyledPOutro = styled.div`
  width: 100vw;
  text-align: center;
  color: white;
  margin-top: 20vh;
  margin-bottom: 15vh;
  opacity: 0.8;
  @media (max-width: 1024px) {
    width: 100vw;
    margin-top: 10vh;
    overflow-wrap: break-word;
  }
  h1 {
    font-size: 0.8em;
    font-weight: 600;
    @media (max-width: 1024px) {
      width: 80vw;
      display: inline-block;
      line-height: 1.5;
    }
  }
  h2 {
    font-size: 0.8em;
    font-weight: 300;
    line-height: 1.5;
    width: 80%;
    display: block;
    margin: 0 auto;

    @media (max-width: 1024px) {
      width: 80%;
      display: inline-block;
    }
  }
  p {
    margin-top: 10vh;
    font-size: 0.8em;
    font-weight: 300;
    opacity: 0.5;
    @media (max-width: 1024px) {
      display: inline-block;
      margin-bottom: 10vh;
    }
  }
`

export default POutro
