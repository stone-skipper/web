import React from 'react'
import { NavLink } from 'react-router-dom'

// 1. Dependencies
// 2. Components
// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//——*——*——*——*——*——//

const Header = () => {
  return (
    <StyledHeader>
      <MenuGroup>
        <NavLink className="menus" activeClassName="activeMenus" to="/works">
          works
        </NavLink>
        <NavLink className="menus" activeClassName="activeMenus" to="/profile">
          profile
        </NavLink>
        <NavLink className="menus" activeClassName="activeMenus" to="/photolog">
          photolog
        </NavLink>
        <NavLink className="menus" activeClassName="activeMenus" to="/contact">
          contact
        </NavLink>
      </MenuGroup>
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
  width: 100vw;
  background-color: transparent;
  color: white;
  position: absolute;
  top: 0;
  z-index: 999;
  & p {
    font-size: 1.2em;
    background-color: transparent;
  }

  & .logo {
    font-weight: 600;
    float: left;
    font-size: 1.2em;
  }

  & .activeLogo {
  }

  & .menus {
    opacity: 0.5;
    font-weight: 600;
    transition: 0.4s;
  }

  & .menus:hover {
    opacity: 1;
  }

  & .activeMenus {
    color: white;
    opacity: 1;
  }
`

const MenuGroup = styled.div`
  position: absolute;
  font-size: 0.8em;
  width: 30vw;
  top: 3vw;
  right: 3vw;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-items: right;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
    font-size: 0.8em;
    grid-row-gap: 1vh;
    margin-top: 1vh;
  }
`

export default Header
