import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 1. Dependencies
import LazyLoad from 'react-lazyload'

// 2. Components

// 3. for style
import styled from 'styled-components'
import Close from '@material-ui/icons/Close'

// 4. Static Resources

//——*——*——*——*——*——//

const PhotoItem = props => {
  const {
    data,
    title,
    place,
    year,
    Ptitle,
    setTitle,
    Pplace,
    setPlace,
    Pdata,
    setData,
    clicked,
    setClicked
  } = props
  const [modalOpen, setModalOpen] = React.useState('none')

  return (
    <div>
      <StyledPhotoItem
        onClick={event => {
          setClicked(true)
          setTitle(props.title)
          setPlace(props.place)
          setData(props.data)
          console.log(clicked)
          console.log(modalOpen)

          setModalOpen('block')
        }}
      >
        <LazyLoad height={200} offset={200} once>
          <img
            src={require(`../img/photolog/${data}.jpg`)}
            alt={title}
            className="thumb"
          />
        </LazyLoad>
        {/* <img
        src={require(`../img/photolog/${data}.jpg`)}
        alt="blah"
        className="large"
      /> */}
        <div className="text">
          <span className="title">{title}</span>
          <br />
          <span className="place">@{place}</span>
        </div>
      </StyledPhotoItem>
      <StyledPopUp modalOpen={modalOpen} clicked={clicked}>
        {/* <div
          style={{
            width: '100vw',
            backgroundColor: 'red',
            height: '100vh',
            display: { modalOpen }
          }}
        /> */}
        <div
          className="close"
          style={{
            pointerEvents: 'cursor',
            cursor: 'pointer'
          }}
          onClick={() => {
            setClicked(false)
            console.log(clicked)
            setModalOpen('none')
          }}
        >
          <Close className="closeButton" />
        </div>
        <div className="contentWrapper">
          <img src={require(`../img/photolog/${Pdata}.jpg`)} alt="by sml" />

          <div className="text">
            <span className="title">{Ptitle}</span>
            &nbsp;
            <span className="place">
              @{Pplace} / {year}
            </span>
          </div>
        </div>
      </StyledPopUp>
    </div>
  )
}

const StyledPhotoItem = styled.div`
  width: calc((94vw - 0.3vw * 3) / 4);
  height: 30vh;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  .lazyload-wrapper span {
    width: 0;
    height: 0;
    background-color: transparent;
  }

  @media (max-width: 1024px) {
    width: calc((94vw - 0.3vw) / 2);
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
  }
  .text span {
    background-color: white;
    line-height: 2;
    padding-left: 2px;
    padding-right: 2px;
  }
  .text {
    color: black;
    font-size: 0.7em;
    position: absolute;
    margin-top: 1.5vh;
    margin-left: 1.5vh;
    opacity: 0;
    font-weight: 300;
    .title {
      font-weight: 600;
    }
  }
  :hover .text {
    opacity: 1;
    transition: 0.3s;
  }

  :hover img {
    transform: scale(1.05);
    transition: 0.3s;
  }
`

const StyledPopUp = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  color: white;
  overflow: hidden;
  z-index: 1000;
  padding: 10vh;
  background-color: rgba(0, 0, 0, 0.95);
  display: ${props => props.modalOpen};
  @media (max-width: 1024px) {
    padding: 0;
  }
  img {
    height: 80vh;
    min-width: 80vw;
    object-fit: contain;
    margin: 0 auto;
    text-align: center;
    /* background-color: white; */
    @media (max-width: 1024px) {
      width: 100vw;
      margin: 0;
      max-height: 70vh;
      margin-top: 5vh;
    }
  }
  .contentWrapper {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    /* background-color: red; */
    text-align: center;
  }
  .close {
    position: absolute;
    top: 10vh;
    right: 10vh;
    width: 5vh;
    height: 5vh;
    @media (max-width: 1024px) {
      right: 0;
      top: 3vh;
    }
  }
  .text {
    text-align: center;
    font-size: 0.7em;
    .title {
      font-weight: 600;
    }
  }
`

export default PhotoItem
