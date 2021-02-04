import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 1. Dependencies
// 2. Components
import { Fade } from 'react-slideshow-image'

// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//——*——*——*——*——*——//

const CircleSlide = props => {
  const { imgs, left } = props
  var imgNum = imgs.length
  const fadeProperties = {
    duration: 3000,
    transitionDuration: 300,
    infinite: true,
    indicators: true,
    autoplay: true,
    arrows: false,
    onChange: (oldIndex, newIndex) => {
      console.log(`fade transition from ${oldIndex} to ${newIndex}`)
    }
  }

  return (
    <StyledCircleslide left={left}>
      <div className="slide-container">
        <Fade {...fadeProperties}>
          {imgs.map(item => {
            const { slides } = item
            return (
              <div className="each-fade">
                <div className="image-container">
                  <img
                    src={require(`../img/${item.imgSrc}.jpg`)}
                    alt={item.imgSrc}
                  />
                </div>
              </div>
            )
          })}
        </Fade>
      </div>
    </StyledCircleslide>
  )
}

const StyledCircleslide = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  z-index: -10;

  .slide-container {
    width: 100vw;
    height: 100vh;
    position: absolute;
    /* left: calc(50vw - 75vh); */
    left: ${props => props.left};
    top: -25vh;
    opacity: 0.9;
  }

  .image-container {
    width: 150vh;
    height: 150vh;
    border-radius: 75vh;
    overflow: hidden;
    img {
      width: 100%;
      height: 150vh !important;
      object-fit: cover;
    }
  }
`

export default CircleSlide
