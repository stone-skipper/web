import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 1. Dependencies
// 2. Components
// 3. for style
import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'

// 4. Static Resources

//——*——*——*——*——*——//

const Layout = props => {
  const { children } = props

  return (
    <StyledLayout>
      <Header />

      {children}
      <Footer />
    </StyledLayout>
  )
}

const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
`

export default Layout
