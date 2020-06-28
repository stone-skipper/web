import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 1. Dependencies
// 2. Components
// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//——*——*——*——*——*——//

const Footer = () => {
  return (
    <StyledFooter>
      Copyright ⓒ 2020 By Seungmee Lee.
      <br />
      All right reserved.
    </StyledFooter>
  )
}

const StyledFooter = styled.div`
  color: white;
  opacity: 0.4;
  text-align: right;
  position: absolute;
  bottom: 3vw;
  right: 3vw;
  font-size: 0.5em;
  background-color: transparent;
`

export default Footer
