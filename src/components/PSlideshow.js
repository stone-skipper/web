import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 1. Dependencies
// 2. Components
import LazyLoad from 'react-lazyload'
import { Fade } from 'react-slideshow-image'

// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//——*——*——*——*——*——//

const PSlideshow = props => {
  const { imgs, title, desc, dur, trdr } = props
  var imgNum = imgs.length
  var duration = dur
  var transitionDuration = trdr
  const fadeProperties = {
    duration: duration,
    transitionDuration: transitionDuration,
    infinite: true,
    indicators: true,
    autoplay: true,
    arrows: false,
    onChange: (oldIndex, newIndex) => {
      // console.log(`fade transition from ${oldIndex} to ${newIndex}`)
    }
  }

  return (
    <StyledPSlideshow>
      <div className="slide-container">
        <Fade {...fadeProperties}>
          {imgs.map(item => {
            const { slides } = item
            return (
              <div className="each-fade" key={item.imgSrc}>
                <div className="image-container">
                  <LazyLoad height={200} offset={200} once>
                    <img
                      src={require(`../img/${item.imgSrc}.jpg`)}
                      alt={item.imgSrc}
                    />
                  </LazyLoad>
                </div>
              </div>
            )
          })}
        </Fade>
      </div>
      <div className="textWrapper">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </StyledPSlideshow>
  )
}

const StyledPSlideshow = styled.div`
  width: 100vw;
  height: 90vh;
  padding: 0 3vw;
  color: white;
  overflow: hidden;
  margin-bottom: 15vh;
  @media (max-width: 1024px) {
    height: 70vh;
    padding: 0;
    height: max-content;
  }

  .slide-container {
    margin-top: 2vh;
    width: calc(94vw * imgNum);
    height: 75vh;
    display: flex;
    @media (max-width: 1024px) {
      height: 40vh;
      width: calc(100vw * imgNum);
    }
  }

  .image-container {
    width: 94vw;
    height: 75vh;
    overflow: hidden;
    @media (max-width: 1024px) {
      height: 40vh;
      width: 100vw;
    }
    img {
      width: 100%;
      height: 100% !important;
      object-fit: cover;
    }

    p {
      position: absolute;
      top: 1vw;
      left: 1vw;
      z-index: 10;
      font-weight: 600;
      font-size: 0.8em;
    }
  }
  .textWrapper {
    width: 94vw;
    margin-top: 3vh;
    display: grid;
    grid-template-columns: 62.66vw 31.33vw;
    @media (max-width: 1024px) {
      display: block;
      width: 70vw;
      margin-left: 5vw;
    }
    h1 {
      font-size: 2.5em;
      font-weight: 600;
      /* @media (max-width: 1024px) {
        font-size: 1em;
      } */
    }
    p {
      font-size: 0.8em;
      font-weight: 300;
      margin-top: 0.5em;
      @media (max-width: 1024px) {
        width: 80%;
      }
    }
  }
`

export default PSlideshow
