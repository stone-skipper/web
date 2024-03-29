import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 1. Dependencies
// 2. Components
// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//——*——*——*——*——*——//

const PIframe = props => {
  const { url, title, desc, frameheight } = props

  return (
    <StyledPIframe frameheight={frameheight || '75vh'}>
      <div className="iframeWrapper">
        <iframe src={url} width="100%" title={title} />
      </div>
      <div className="textWrapper">
        {title}
        <p>{desc}</p>
      </div>
    </StyledPIframe>
  )
}

const StyledPIframe = styled.div`
  width: 100vw;
  height: max-content;
  padding: 0 3vw;
  color: white;
  margin-top: 20vh;
  @media (max-width: 1024px) {
    padding: 0;
  }

  .iframeWrapper {
    width: 94vw;
    height: ${props => props.frameheight};
    background-color: rgba(255, 255, 255, 0.1);
    iframe {
      border: none;
      width: 100%;
      height: 100%;
    }
    @media (max-width: 1024px) {
      width: 100vw;
      height: 60vh;
    }
  }

  .textWrapper {
    width: 94vw;
    margin-top: 3vh;
    display: grid;
    grid-template-columns: 62.66vw 31.33vw;
    @media (max-width: 1024px) {
      width: 90vw;
      display: block;
      margin-left: 5vw;
    }
    h1 {
      font-size: 2.5em;
      font-weight: 600;
    }
    h1 span {
      font-size: 0.5em;
    }

    p {
      font-size: 0.8em;
      font-weight: 300;
      margin-top: 0.5em;
    }
  }
`

export default PIframe
