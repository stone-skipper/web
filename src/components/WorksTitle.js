import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// 1. Dependencies
// 2. Components
// 3. for style
import styled from 'styled-components'
import Image from 'lqip-react'

// import Img01 from '../img/p01_thumb.jpg'

// 4. Static Resources

//——*——*——*——*——*——//

const WorksTitle = props => {
  const { type, title, imgSrc, link, year, currentMenu, setCurrentMenu } = props
  var thumbnail = imgSrc + 'small'
  const handleHover = event => {
    console.log(
      'event target: ',
      event.target,
      ' / ',
      'event target id: ',
      event.target.id
    )
    console.log(event.target.id)
    setCurrentMenu(event.target.id)
    // console.log(currentMenu)
  }

  // useEffect(() => {
  //   setCurrentMenu(currentMenu)
  //   console.log(currentMenu)
  // }, [currentMenu])

  const handleMouseOut = event => {
    console.log('mouse out from:', event.target.id)
    setCurrentMenu(null)
  }

  return (
    <StyledWorksTitle>
      <TitleItem id={title}>
        <ImgBack className="imgWrapper">
          {/* <Image
            src={require(`../img/${imgSrc}.jpg`)}
            thumbnail={require(`../img/${thumbnail}.jpg`)}
            aspectRatio="10x10" // could be '1024x768'
            blur={10}
          /> */}
          {/* <img src={require(`../img/${imgSrc}.jpg`)} alt={title} /> */}
          <img
            src={
              'https://smlweb-src.s3.ap-northeast-2.amazonaws.com/' +
              imgSrc +
              '.jpg'
            }
            alt={title}
          />
        </ImgBack>
        <div
          className={`itemWrapper ${(currentMenu === title ||
            currentMenu === null) &&
            'activated'}`}
          id={title}
          onMouseOverCapture={handleHover}
          onMouseOut={handleMouseOut}
        >
          <Link to={link} id={title} className={title}>
            <h1>{title}</h1>
            <div className="titleInfo">
              <h2>{type}</h2>
              <p>{year}</p>
            </div>
          </Link>
        </div>
      </TitleItem>
    </StyledWorksTitle>
  )
}

const StyledWorksTitle = styled.div`
  color: white;
  width: 30vw;
  margin: 0;
  @media (max-width: 1024px) {
    width: 94vw;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`

const ImgBack = styled.div`
  width: 150vh;
  height: 150vh;
  border-radius: 75vh;
  overflow: hidden;
  position: fixed;
  top: -25vh;
  left: calc(50vw - 75vh);
  z-index: -100;
  scale: 1;
  opacity: 0;
  margin: 0 auto;
  img {
    object-fit: cover;
    width: 100%;
  }

  @media (max-width: 1024px) {
    width: 90vh;
    height: 90vh;
    border-radius: 45vh;
    top: 5vh;
    left: calc(50vw - 45vh);
  }
`

const TitleItem = styled.div`
  width: 32vw;
  height: 8vh;
  margin-bottom: 10px;
  position: relative;
  @media (max-width: 1024px) {
    width: 94vw;
    /* background-color: red; */
    margin-bottom: 3px;
  }
  .imgWrapper {
    transition: 0.3s;
  }
  :hover .imgWrapper {
    opacity: 0.9;
    scale: 1;
  }

  .itemWrapper {
    opacity: 0.1;
    transition: 0.2s;
    background-color: rgba(0, 0, 0, 0);
    &.activated {
      opacity: 1;
    }
  }
  .campfire h1 {
    /* border-bottom: 2px solid white; */
  }

  .odd h1 {
    /* border-bottom: 2px solid white; */
    /* background: url('https://ewebdesign.com/wp-content/themes/ewebdesign/assets/img/wave.svg');
    background-repeat: repeat;
    background-ppposition-x: 0%;
    background-position-y: 0%;
    background-size: auto auto;
    background-repeat: repeat-x;
    background-size: 15px 5px;
    background-position: 2px 40px;
    animation: move 15s linear infinite;
    -webkit-animation: move 15s linear infinite;
    animation-play-state: paused;
    text-decoration: none;
    background-color: transparent;
    -webkit-text-decoration-skip: objects; */
  }
  link {
    pointer-events: none;
  }

  a {
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  h1 {
    margin: 0;
    font-size: 3em;
    font-weight: 600;
    float: left;
    margin-right: 0.5em;
    pointer-events: none;
    @media (max-width: 1024px) {
      font-size: 2.5em;
    }
  }

  h2 {
    margin: 0;
    font-size: 0.7em;
    font-weight: 300;
    margin-top: 0.2em;
    @media (max-width: 1024px) {
      text-align: right;
    }
  }

  p {
    margin: 0;
    font-size: 0.7em;
    font-weight: 300;
    @media (max-width: 1024px) {
      text-align: right;
    }
  }

  .titleInfo {
    padding-top: 0.3em;
    pointer-events: none;
  }

  .titleInfo:after {
    content: '';
    display: block;
    clear: both;
  }
`

export default WorksTitle
