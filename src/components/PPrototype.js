import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// 1. Dependencies
// 2. Components
import ReactPlayer from 'react-player'
// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//——*——*——*——*——*——//

const PPrototype = props => {
  const { videoSrc, title, desc, links } = props
  return (
    <StyledPPrototype>
      <div className="videoWrapper">
        <ReactPlayer
          url={videoSrc}
          className="react-player"
          width="60vw"
          height="70vh"
          playing
          muted
          loop
          controls="false"
        />
      </div>
      <div className="textWrapper">
        {title}
        <p>{desc}</p>

        <div className="link">
          {links.map(item => {
            const { linklist } = item
            return (
              <a href={item.linkSrc} target="_blank" rel="noopener noreferrer">
                {item.linkTitle}
                <br />
              </a>
            )
          })}
        </div>
      </div>
    </StyledPPrototype>
  )
}

const StyledPPrototype = styled.div`
  width: 100vw;
  height: max-content;
  padding: 3vw;
  display: grid;
  margin-top: 10vh;
  grid-template-columns: 62.66vw 31.33vw;
  @media (max-width: 1024px) {
    grid-template-rows: 30vh 50vh;
    grid-template-columns: none;
    padding: 0 5vw;
    margin-top: 0;

    height: max-content;
  }
  .videoWrapper {
    width: 60vw;
    height: max-content;
    position: relative;
    margin: 0;
    display: flex;
    align-content: start;
    @media (max-width: 1024px) {
    }

    .react-player {
      position: absolute;
      margin: 0;
      top: 0;
      left: 0;
      width: 100%;
      height: 60vw;
      padding: 0;
      @media (max-width: 1024px) {
        width: 100vw !important;
        margin-left: -5vw;
        height: 30vh !important;
        padding: 0;
      }
    }
  }
  .textWrapper {
    color: white;
    @media (max-width: 1024px) {
      height: max-content;
    }

    h1 {
      font-size: 2.5em;
      font-weight: 600;
      margin-bottom: 8vh;
      margin-top: 8vh;
      line-height: 1.3;
      @media (max-width: 1024px) {
        margin-top: 5vh;
        margin-bottom: 5vh;
      }
    }
    h1 span {
      font-size: 0.5em;
    }
    p {
      width: 80%;
      font-size: 0.8em;
      font-weight: 300;
      margin-bottom: 15vh;
      @media (max-width: 1024px) {
        margin-bottom: 3vh;
      }
    }
    a {
      color: white;
      text-decoration: underline;
      line-height: 2;
    }
  }
`

export default PPrototype
