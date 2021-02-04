import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 1. Dependencies
// 2. Components
// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//——*——*——*——*——*——//

const PMoodboard = props => {
  const { imgs, title, desc } = props
  return (
    <StyledPMoodboard>
      <div className="imgWrapper">
        {imgs.map(item => {
          const { moodboardImgs } = item
          return (
            <div className="itemWrapper">
              <img src={require(`../img/${item.imgSrc}.jpg`)} alt={item.desc} />
              <p>{item.desc}</p>
            </div>
          )
        })}
      </div>
      <div className="titleWrapper">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </StyledPMoodboard>
  )
}

const StyledPMoodboard = styled.div`
  width: 100vw;
  height: 100vh;
  padding-left: 5vw;
  margin-bottom: 10vh;
  background-color: rgba(255, 255, 255, 0.1);
  position: relative;
  .imgWrapper {
    width: 90vw;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
    grid-column-gap: auto;

    .itemWrapper {
      width: max-content;
      opacity: 0.7;
      margin-top: 10vw;
      img {
        min-width: 15vw;
        max-width: 25vw;
        max-height: 80vh;
        min-height: 50vh;
        object-fit: contain;
      }
    }
  }

  .titleWrapper {
    position: absolute;
    top: 3vw;
    left: 3vw;
    display: grid;
    align-items: start;

    grid-template-columns: 62.66vw 31.33vw;

    h1 {
      margin: 0;
      padding: 0;
      font-size: 2.5em;
      font-weight: 600;
    }

    p {
      margin: 0;
      padding: 0;
      font-size: 0.8em;
      font-weight: 300;
      margin-top: 0.5em;
    }
  }
`

export default PMoodboard
