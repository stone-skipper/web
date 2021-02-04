import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 1. Dependencies
// 2. Components
// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//——*——*——*——*——*——//

const PDrawing2 = props => {
  const { title, desc, imgs, bgColor } = props
  var imgNum = imgs.length

  return (
    <StyledPDrawing2 bgColor={bgColor} imgNum={imgNum}>
      <div className="sectWrapper">
        {imgs.map(item => {
          const { drawings } = item
          return (
            <div className="itemWrapper" key={item.imgSrc}>
              <div className="titleWrapper">
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
              </div>
              <div className="imgWrapper">
                <img
                  src={require(`../img/${item.imgSrc}.png`)}
                  alt={item.desc}
                />
              </div>
            </div>
          )
        })}
      </div>
    </StyledPDrawing2>
  )
}

const StyledPDrawing2 = styled.div`
  width: 100vw;
  padding: 3vw;
  margin-bottom: 15vh;
  background-color: white;

  .sectWrapper {
    width: 94vw;
    display: grid;
    grid-template-columns: repeat(${props => props.imgNum}, 1fr);
    grid-gap: 3px;
  }
  .itemWrapper {
    width: calc(
      94vw / ${props => props.imgNum} - 3px * ${props => props.imgNum}
    );
    position: relative;
    background-color: rgba(255, 255, 255, 0.1);
    .imgWrapper {
      width: 90%;
      text-align: center;
    }
    img {
      width: 90%;
    }
    .titleWrapper {
      width: 90%;
      text-align: left;
      color: black;

      h1 {
        font-size: 2.5em;
        font-weight: 600;
        margin: 0;
        padding: 0;
        width: 60%;
        margin-bottom: 2vh;
      }
      p {
        font-size: 0.8em;
        font-weight: 300;
        width: 80%;
      }
    }
  }
`

export default PDrawing2
