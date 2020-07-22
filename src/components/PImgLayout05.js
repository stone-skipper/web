import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 1. Dependencies
// 2. Components
// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//——*——*——*——*——*——//

const PImgLayout05 = props => {
  const { imgs } = props

  return (
    <StyledPImgLayout05>
      {imgs.map(item => {
        const { imgGrid } = item
        return (
          <div className="itemWrapper" key={item.imgSrc}>
            {/* <img src={require(`../img/${item.imgSrc}.jpg`)} alt={item.desc} /> */}
            <img
              src={
                'https://smlweb-src.s3.ap-northeast-2.amazonaws.com/' +
                item.imgSrc +
                '.jpg'
              }
              alt={item.imgSrc}
            />
          </div>
        )
      })}
    </StyledPImgLayout05>
  )
}

const StyledPImgLayout05 = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 3vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(10, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;

  .itemWrapper {
    width: calc((94vw - 10px) / 3);
    height: 40vh;
    overflow: hidden;
    img {
      width: 100% !important;
      height: 100%;
      object-fit: cover;
    }
  }
`

export default PImgLayout05
