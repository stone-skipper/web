import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 1. Dependencies
// 2. Components
// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//——*——*——*——*——*——//
const PProcess = props => {
  const { imgs } = props
  var imgNum = imgs.length
  return (
    <StyledPProcess imgNum={imgNum}>
      <h1>process</h1>
      <div className="scrollWrapper">
        <div className="scrollInner">
          {imgs.map(item => {
            const { processImg } = item
            return (
              <div className="itemWrapper">
                <p>{item.desc} / </p>
                <img
                  src={require(`../img/${item.imgSrc}.jpg`)}
                  alt={item.desc}
                />
              </div>
            )
          })}
        </div>
      </div>
    </StyledPProcess>
  )
}

const StyledPProcess = styled.div`
  width: 100vw;
  height: 70vh;
  margin-top: 15vh;
  h1 {
    font-size: 1em;
    font-weight: 600;
    margin-left: 3vw;
    margin-bottom: 10vh;
  }

  .scrollWrapper {
    width: 97vw;
    height: 55vh;
    overflow-x: scroll;
    overflow-y: hidden;
    margin-left: 3vw;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    @media (max-width: 1024px) {
      margin-left: 5vw;
      width:95vw;
height:50vh;

    }
  }
  .scrollInner {
    height: 50vh;
    width: max-content;
    /* width: calc((30vw + 0.5vw) * ${props => props.imgNum} + 3vw); */
    & > :last-child {
      margin-right: 3vw;
    }
  }
  .itemWrapper {
    float: left;
    color: white;
    margin-right: 0.5vw;
    font-size: 0.8em;
    p {
      padding: 0;
      margin: 0;
      margin-bottom: 1em;
      font-size: 0.9em;
      @media (max-width: 1024px) {
        font-size:0.8em;
      }
    }
    img {
      max-width: 30vw;
      max-height: 45vh !important;
      object-fit: contain;
      filter: saturate(0.3);
      @media (max-width: 1024px) {
        max-width: 60vw !important;
        max-height: 60vh;
      }
      
    }
    img:hover {
      filter: saturate(1);
    }
  }
`

export default PProcess
