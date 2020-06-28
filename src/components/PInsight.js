import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 1. Dependencies
// 2. Components
// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//——*——*——*——*——*——//

const PInsight = props => {
  const { imgs } = props
  return (
    <StyledPInsight>
      <div className="itemWrapper">
        {imgs.map(item => {
          const { insight } = item
          return (
            <div className="item">
              <div className="textWrapper">
                <p>{item.number}</p>
                <h1>{item.title}</h1>
              </div>

              <div className="imgWrapper">
                <img
                  src={require(`../img/${item.imgSrc}.png`)}
                  alt={item.desc}
                />
                <div className="circle" />
              </div>
              <div className="text">
                <p>{item.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </StyledPInsight>
  )
}

const StyledPInsight = styled.div`
  width: 100vw;
  height: 130vh;
  padding: 3vw;
  margin-top: 15vh;
  margin-bottom: 15vh;

  .itemWrapper {
    width: 94vw;
    display: grid;
    margin-top: 5vh;
    grid-template-columns: repeat(3, 31.33vw);
  }
  .item {
    width: 100%;
  }
  .textWrapper {
    p {
      font-weight: 600;
    }
    h1 {
      font-size: 1.8em;
      font-weight: 600;
      line-height: 1.5;
      width: 30vw;
    }
  }
  .imgWrapper {
    width: 31.33vw;
    height: 31.33vw;
    position: relative;
    margin-top: 8vh;
    margin-bottom: 10vh;

    img {
      width: 31.33vw;
      object-fit: contain;
      position: absolute;
      display: block;
      top: 50%;
      transform: translateY(-50%);
      z-index: 10;
    }
    .circle {
      width: 25vw;
      height: 25vw;
      border-radius: 12.5vw;
      position: absolute;
      display: block;
      background-color: rgba(255, 255, 255, 0.1);
      top: 50%;
      transform: translateY(-50%) translateX(-50%);
      left: 50%;
    }
  }

  .text p {
    width: 20vw;
    font-size: 0.8em;
  }
`

export default PInsight
