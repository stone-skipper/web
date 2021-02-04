import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 1. Dependencies
// 2. Components
// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//——*——*——*——*——*——//

const PPwd = () => {
  const [pwd, setPwd] = useState('')
  const [hider, setHider] = useState(true)
  return (
    <StyledPPwd hider={hider}>
      <div className="center">
        <input
          type="password"
          placeholder="confidential work"
          onChange={event => {
            setPwd(event.target.value)
            console.log(pwd)
          }}
        />
        <button
          onClick={() => {
            if (pwd === 'password') {
              setHider(false)
            }
          }}
        >
          go
        </button>
      </div>
    </StyledPPwd>
  )
}

const StyledPPwd = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: black;
  z-index: 100;
  font-size:2em;
  display: ${props => (props.hider ? 'block' : 'none')};
  }
  .center {
    margin-top: 47.5vh;
    margin-left: 35vw;
    width: 30vw;
    height: 5vh;
    text-align: center;

  }
  input {
    text-decoration: none;
    border: none;
    background-color: rgba(0, 0, 0, 0);
    color: white;
    height:5vh;
    padding-bottom:10px;
    width:60%;
    margin-right:1em;
    border-bottom: 1px solid white;
  }
  input:focus{
      outline:none;
  }
  button {
    background-color: rgba(0, 0, 0, 0);
    color: white;
    border:none;
    font-weight:600;
    height:5vh;

  }
`

export default PPwd
