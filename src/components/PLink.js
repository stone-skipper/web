import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 1. Dependencies
// 2. Components
// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//——*——*——*——*——*——//

const PLink = props => {
  const { desc, linkTitle, link } = props
  return (
    <StyledPLink>
      <div className="more">
        <p>{desc}</p>
        <a href={link}>{linkTitle}</a>
      </div>
    </StyledPLink>
  )
}

const StyledPLink = styled.div`
  width: 100vw;
  height: max-content;
  color: white;
  padding: 15vh 0 8vh 0;
  text-align: center;
  .more {
    width: 100vw;
    height: 100%;
    margin: 0 auto;
  }
  p {
    font-size: 2.5em;
    font-weight: 300;
    padding: 0;
    margin: 0;
  }
  a {
    font-size: 2.5em;
    font-weight: 600;
    padding: 0;
    margin: 0;
    display: inline;
    text-decoration: underline;
  }
`

export default PLink
