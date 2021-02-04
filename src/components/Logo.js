import React from 'react'

// 1. Dependencies
// 2. Components
// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//——*——*——*——*——*——//
const Logo = props => {
  const { hide } = props
  return (
    <StyledLogo>
      <LogoGroup>
        <a href="/" className="logo">
          seungmee lee
        </a>{' '}
        <HideText hide={hide}>
          is <br />
          an experience designer, <br />
          creating and visualizing new experiences
        </HideText>
      </LogoGroup>
    </StyledLogo>
  )
}

const StyledLogo = styled.div`
  width: 100vw;
  background-color: transparent;
  color: white;
  z-index: 999;
  @media (max-width: 1024px) {
    width: 70vw;
  }

  .logo {
    font-weight: 600;
    font-size: 1.2em;
    z-index: 100;
    display: inline;
    cursor: pointer;
  }
`
const LogoGroup = styled.div`
  position: absolute;
  top: 3vw;
  left: 3vw;
  :hover p {
    opacity: 1;
  }
  @media (max-width: 1024px) {
    width: 70vw;
  }
`

const HideText = styled.p`
  font-size: 1.2em;
  transition: 0.4s;
  display: inline;

  opacity: ${props => props.hide};
  @media (max-width: 1024px) {
    width: 70vw;
  }
`
export default Logo
