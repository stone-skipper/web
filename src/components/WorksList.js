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

const WorksList = props => {
  const { type, title, imgSrc, link, year } = props
  var thumbnail = imgSrc + 'small'
  return (
    <StyledWorksList>
      <ImgBack className="imgWrapper">
        {/* <img src={require(`../img/${imgSrc}.jpg`)} alt="blah" /> */}
        <Image
          src={require(`../img/${imgSrc}.jpg`)}
          thumbnail={require(`../img/${thumbnail}.jpg`)}
          aspectRatio="10x10" // could be '1024x768'
          blur={10}
        />
      </ImgBack>
      <WorksTitle>
        <Link to={link} className="clearfix">
          <h1 className="clearfix">{title}</h1>
          <h2 className="clearfix">{type}</h2>
          <p>{year}</p>
        </Link>
        {/* <BlackWrapper /> */}
      </WorksTitle>
    </StyledWorksList>
  )
}

const ImgBack = styled.div`
  width: 140vh;
  height: 140vh;
  border-radius: 70vh;
  overflow: hidden;
  position: fixed;
  transition: 0.4s;
  top: -20vh;
  right: 15vh;
  z-index: -1000;
  & img {
    height: 100% !important;
    object-fit: contain;
    transition: 0.4s;
    opacity: 0;
    /* filter: blur(10px); */
  }
`

const WorksTitle = styled.div`
  position: relative;
  height: 2em;
  color: white;
  margin-bottom: 0.8em;
  transition: 0.3s;
  &link {
    clear: both;
  }
  h1 {
    font-weight: 600;
    text-align: left;
    font-size: 1.5em;
    float: left;
    margin: 0;
    padding-right: 1em;
  }
  h2 {
    font-weight: 100;
    font-size: 1.5em;
    text-align: left;
    opacity: 0.5;
  }
  p {
    font-weight: 100;
    font-size: 0.6em;
    text-align: right;
    width: 46.5vw;
    margin-top: -4.3em;
    padding-right: 1em;
  }
  :hover {
    margin-left: 2em;
  }
`
const StyledWorksList = styled.div`
  z-index: 1;

  /* background-color: red; */
  @media (max-width: 1024px) {
    width: 80vw;
    height: 20vh;
    margin-right: 0;
    margin-bottom: 0.5vh;
    margin-top: 0;
  }

  :hover {
    z-index: 100;
  }
  :hover h1,
  h2,
  link {
    z-index: 100;
  }
  :hover img {
    display: block;
    z-index: -1001;
    opacity: 0.9;
  }
  .imgWrapper {
    transition: 0.4s;
  }
  :hover .imgWrapper {
  }
`
const BlackWrapper = styled.div`
  width: 45%;
  height: 100%;
  background-color: black;
  position: absolute;
  top: 0;
  z-index: -1200;
`

export default WorksList
