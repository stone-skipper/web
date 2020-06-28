import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 1. Dependencies
// 2. Components
// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//——*——*——*——*——*——//

const PReferences = props => {
  const { references, title } = props
  return (
    <StyledPReferences>
      <h1>{title}</h1>
      <div className="urlList">
        {references.map(item => {
          return (
            <div className="url">
              <a href={item.url}>{item.urltitle}</a>

              <p>{item.desc}</p>
            </div>
          )
        })}
      </div>
    </StyledPReferences>
  )
}

const StyledPReferences = styled.div`
  width: 94vw;
  height: max-content;
  margin-left: 3vw;
  color: white;
  line-height: 1.8;
  display: grid;
  grid-template-columns: 62.66vw 31.33vw;
  .urlList {
    width: 31.33vw;
  }
  h1 {
    font-size: 1.2em;
    font-weight: 600;
    margin-bottom: 2vh;
  }
  p {
    margin: 0;
  }
  a {
    text-decoration: underline;
    float: left;
    margin-right: 1em;
  }
`

export default PReferences
