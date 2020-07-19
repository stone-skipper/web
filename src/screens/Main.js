import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 1. Dependencies
// 2. Components
// 3. for style

import Logo from '../components/Logo'
import { Fade } from 'react-slideshow-image'

// import HandleMouseEnter from '../components/HandleMouseEnter'
import styled from 'styled-components'
import MAINLIST from '../screens/main-list.json'
// import LogRocket from 'logrocket'

// 4. Static Resources

//——*——*——*——*——*——//

const Main = () => {
  // LogRocket.init('9el2l9/smlweb')

  var [bg, setBg] = React.useState('white')
  var [cx, setCx] = React.useState('')
  var [cy, setCy] = React.useState('')
  const fadeProperties = {
    duration: 2000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    autoplay: true,
    arrows: false,
    onChange: (oldIndex, newIndex) => {
      // console.log(`fade transition from ${oldIndex} to ${newIndex}`)
    }
  }
  const fadeProperties2 = {
    duration: 4000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    autoplay: true,
    arrows: false,
    onChange: (oldIndex, newIndex) => {
      // console.log(`fade transition from ${oldIndex} to ${newIndex}`)
    }
  }
  var imgs = [
    'p01_thumb',
    'p02_img13',
    'p03_img05',
    // 'p04_img10',
    'e03_img02',
    'e01_thumb2',
    'p05_img01',
    'p02_img18',
    'p03_img01',
    'p03_pr01',

    'p04_pr04',
    'p03_img08',
    'p06_pr18',
    'p03_img17',
    // 'p03_img20',
    // 'p03_img43',
    'p05_img05'
    // 'p03_img51'
  ]
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }

  return (
    <div>
      <StyledMain
        onMouseMove={e => {
          // console.log(e.clientX, e.clientY)
          var x = e.clientX - window.innerWidth / 2
          var y = e.clientY - window.innerHeight / 2

          // if (
          //   e.movementX > 50 ||
          //   e.movementY > 50 ||
          //   e.movementX < -50 ||
          //   e.movementY < -50
          // ) {
          //   setBg(imgs[random])
          // } else {
          //   setBg('white')
          // }
          console.log(bg)
          setCx('rotateX(' + x / 10 + 'deg)')
          setCy('rotateY(' + -y / 10 + 'deg)')
        }}
        cx={cx}
        cy={cy}
      >
        <div className="circle">
          <div className="slide-container2">
            <Fade {...fadeProperties2}>
              {imgs.map(item => {
                return (
                  <div className="each-fade" key={item}>
                    <div className="image-container">
                      {/* <img src={require(`../img/${item}.jpg`)} alt={item} /> */}
                      <img
                        src={
                          'https://smlweb-src.s3.ap-northeast-2.amazonaws.com/' +
                          item +
                          '.jpg'
                        }
                        alt={item}
                      />
                    </div>
                  </div>
                )
              })}
            </Fade>
          </div>
        </div>
        <div className="typo">
          <p>
            <span className="bold">seungmee lee</span> is
            <span className="italic"> an experience designer,</span>
            <br />
            visualizing and creating new experiences beyond screens.
            <br />
            has a passion in interactions and ux for emerging technologies.
            <br />
            <br />
            this is an archive of projects and experiments <br />
            by observing, crafting, coding, drawing, and designing.
          </p>
        </div>
        <div
          className="card"
          // onMouseEnter={() => {
          //   var random = randomNumber(0, imgs.length)
          //   setBg(imgs[random])
          // }}
          // onMouseLeave={() => {
          //   setBg('white')
          // }}
        >
          <img src={require(`../img/${bg}.jpg`)} alt={bg} />
          <div className="name">
            <p>
              <span className="bold"> seungmee lee </span>
              <span>/sŋmi: li-/</span>
            </p>
          </div>
          <div className="desc">
            <p>
              <span className="italic"> (experience designer)</span>
              <br />
              <span className="bold">a. </span>envisions new experiences out of
              screen, for products and spaces. <br />
              <span className="bold">b. </span>create physical products and
              interactions <br />
              <span className="bold">c. </span>(off the work) enthusiasm for
              beer, photography, and SF movies.
            </p>
          </div>
        </div>

        <div className="slide-container">
          <Fade {...fadeProperties}>
            {imgs.map(item => {
              return (
                <div className="each-fade" key={item}>
                  <div className="image-container">
                    {/* <img src={require(`../img/${item}.jpg`)} alt={item} /> */}
                    <img
                      src={
                        'https://smlweb-src.s3.ap-northeast-2.amazonaws.com/' +
                        item +
                        '.jpg'
                      }
                      alt={item}
                    />
                  </div>
                </div>
              )
            })}
          </Fade>
        </div>
        <p className="wip">
          The website works best on desktops and laptops, on Chrome or Safari.
        </p>
      </StyledMain>
      {/* <Logo hide={0} /> */}
    </div>
  )
}

const StyledMain = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 120vw;
  .wip {
    color: white;
    margin: 0 auto;
    position: absolute;
    bottom: 10vh;
    font-size: 0.9em;
    display: none;
  }
  .typo {
    color: white;
    font-size: 1.8em;
    position: absolute;
    top: 2vw;
    left: 3vw;
    width: 60%;
    z-index: 10000;
    .italic {
      font-style: italic;
    }
    p {
      line-height: 1.7;
    }
    span {
      font-style: normal;
    }
  }
  .circle {
    width: 150vh;
    height: 150vh;
    border-radius: 75vh;
    top: -25vh;
    right: -25vh;
    /* filter: blur(10px); */
    /* width: 100vw;
    height: 100vh; */
    position: absolute;
    overflow: hidden;
    z-index: -100;
    .slide-container2 {
      height: 100%;
    }
    .slide-container2 img {
      height: 100vh !important;
      margin-top: 25vh;
      width: 100%;
      opacity: 0.8;
      object-fit: cover;
    }
  }
  .card {
    display: block;
    width: 35vw;
    height: 18vw;
    background-color: white;
    padding: 2.2vw;
    font-family: 'Merriweather', serif;
    transition: 0.5s;
    transform: ${props => props.cx} ${props => props.cy};
    -webkit-transform: ${props => props.cx} ${props => props.cy};
    display: none;
    overflow: hidden;
    position: relative;

    @media (max-width: 1024px) {
      display: none;
      width: 78vw;
      height: 39vw;
    }

    img {
      width: 100% !important;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      transition: 0.5s;
      transform: scale(1);
      -webkit-transform: scale(1);
      opacity: 0;
    }
    p {
      transition: 0.5s;
    }
    /* :hover p {
      opacity: 0;
    }
    :hover {
      transform: scale(2);
    }
    :hover img {
      transform: scale(1.2);
      -webkit-transform: scale(1.2);
      opacity: 1;
    } */
  }
  .name {
    font-size: 1.2em;
    margin-top: 2vh;
    z-index: 10;
    position: absolute;
  }
  .desc {
    font-size: 0.8em;
    margin-top: 15vh;
    z-index: 10;
    position: absolute;
  }
  .bold {
    font-weight: 600;
  }
  .italic {
    font-style: italic;
  }

  .slide-container {
    width: calc(100vw * imgNum);
    height: 100vh;
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    @media (max-width: 1024px) {
      display: flex;
    }

    .image-container {
      width: 76vw;
      height: 100vh;
      overflow: hidden;

      img {
        width: 100%;
        height: 100% !important;
        object-fit: cover;
      }
    }
  }
`

export default Main
