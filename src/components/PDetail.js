import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 1. Dependencies
// 2. Components
// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//——*——*——*——*——*——//

const PDetail = props => {
  const { sectTitle, sectDesc, imgs, bgColor } = props
  return (
    <StyledPDetail bgColor={bgColor}>
      <div className="titleWrapper">
        <h2>{sectTitle}</h2>
        <p>{sectDesc}</p>
      </div>
      <div className="items">
        {imgs.map(item => {
          const { detailImg } = item
          return (
            <div className="itemWrapper">
              <img src={require(`../img/${item.imgSrc}.jpg`)} alt={item.desc} />
              <div className="detailDesc">
                <h1>{item.detailTitle}</h1>
                <p>{item.detailDesc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </StyledPDetail>
  )
}

const StyledPDetail = styled.div`
  width: 100vw;
  background-color: ${props => props.bgColor};
  padding: 3vw;
  display: grid;
  grid-template-columns: 31.33vw 62.66vw;
  margin-top: 15vh;
  margin-bottom: 15vh;
  @media (max-width: 1024px) {
    grid-template-columns: none;
    display: block;
    padding: 5vw;
  }
  .titleWrapper {
    width: 31.33vw;
    color: white;
    padding-top: 10vh;
    @media (max-width: 1024px) {
      width: 90vw;
    }
    h2 {
      width: 100%;
      font-size: 2.5em;
      font-weight: 600;
      margin-bottom: 8vh;
      line-height: 1.5;
      @media (max-width: 1024px) {
        margin-bottom: 2vh;
        line-height: 1.2;
      }
    }
    p {
      width: 25vw;
      font-size: 0.8em;
      font-weight: 300;
      @media (max-width: 1024px) {
        width: 80%;
      }
    }
  }
  .items {
    width: 62.66vw;
    margin-top: 10vh;
    /* margin-top: 43vh; */
    @media (max-width: 1024px) {
      width: 90vw;
    }
    .itemWrapper {
      width: 100%;
      img {
        width: 100%;
        object-fit: contain;
      }
      .detailDesc {
        width: 100%;
        margin-top: 2vh;
        margin-bottom: 6vh;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        @media (max-width: 1024px) {
          width: 90vw;
          grid-template-columns: 48vw 40vw;
          grid-row-gap: 2vw;
        }
      }
      h1 {
        width: 30vw;
        font-size: 1.3em;
        font-weight: 600;
        @media (max-width: 1024px) {
          width: 45vw;
          line-height: 1.5;
        }
      }
      p {
        width: 30vw;
        font-size: 0.8em;
        font-weight: 300;
        opacity: 0.5;
        @media (max-width: 1024px) {
          width: 40vw;
        }
      }
    }
  }
`

export default PDetail
