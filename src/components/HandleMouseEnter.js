import { React, ReactDOM } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import styled from 'styled-components'

class HandleMouseEnter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isHover: false
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.isHover) {
      // when the state is updated (turned red),
      // a timeout is triggered to switch it back off
      this.resetHover = setTimeout(() => {
        this.setState(() => ({ isHover: false }))
      }, 300)
    }
  }
  componentWillUnmount() {
    // we set the timeout to this.turnOffRedTimeout so that we can
    // clean it up when the component is unmounted.
    // otherwise you could get your app trying to modify the state on an
    // unmounted component, which will throw an error
    clearTimeout(this.resetHover)
  }
  render(props) {
    const { imgSrc, link } = props

    // really simply ui to show how it *could* work
    return (
      <StyledCircleDiv>
        <HoverPosition>
          onMouseEnter={this.setIsHover}
          className={this.isHover ? 'animationClass' : 'defaultClass'}>
          <div className="imgWrapper">
            <Link to={link}>
              <img src={require(`../img/${imgSrc}.jpg`)} alt="blah" />
            </Link>
          </div>
        </HoverPosition>
      </StyledCircleDiv>
    )
  }
  setIsHover = () => {
    // this function will turn the light red
    this.setState(() => ({
      isHover: true
    }))
  }
}

const StyledCircleDiv = styled.div`
  /* transition: 0.4s;
  :hover {
    width: 30vw;
    height: 30vw;
    border-radius: 15vw;
    filter: blur(0);
  }

  :hover img {
    opacity: 1;
  }
  & img {
    height: 100% !important;
    object-fit: contain;
    opacity: 0;
  }
  & .imgWrapper {
    width: 100%;
    height: 100%;
  } */

  & .defaultClass {
    /* background-color: red; */
    & .imgWrapper {
      /* width: 10vw;
      position: absolute;
      height: 10vw;
      border-radius: 0;
      overflow: hidden;
      filter: blur(20px);
      opacity: 0;
      transition: 1s;
      background-color: black; */
    }
    & .imgWrapper img {
      width: 100% !important;
      height: 100%;
      object-fit: cover;
    }
  }

  & .animationClass {
    /* background-color: white; */
    & .imgWrapper {
      /* width: 10vw;
      height: 10vw;
      border
      opacity: 1; */
      animation: wave 3s linear;
    }
    @keyframes wave {
      0% {
        opacity: 0;
        width: 0vw;
        height: 0vw;
        border-radius: 0vw;
        filter: blur(20px);
      }
      40% {
        opacity: 1;
        width: 20vw;
        height: 20vw;
        border-radius: 10vw;
        filter: blur(0);
      }
      100% {
        opacity: 0;
        width: 40vw;
        height: 40vw;
        border-radius: 20vw;
        filter: blur(20px);
      }
    }
  }
`

const HoverPosition = styled.div`
  height: 100vh;
  width: calc(94vw / 6);
  /* background-color: blue; */
  display: grid;
  align-items: center;
  justify-items: center;
  /* transition: 3s; */
  position: relative;
  @media (max-width: 1024px) {
    width: 94vw;
    height: calc(100vh / 6);
  }

  & .imgWrapper {
    width: 0vw;
    position: absolute;
    height: 0vw;
    border-radius: 0;
    overflow: hidden;
    filter: blur(20px);
    opacity: 0;
    /* transform: translate(-50%, -50%); */
    transition: 1s;
    background-color: white;
    z-index: 1000;
  }

  & .imgWrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  /* :hover {
    background-color: red;
  } */

  /* :hover .imgWrapper {
    width: 30vw;
    height: 30vw;
    border-radius: 15vw;
    opacity: 1;
    filter: blur(0);
    /* animation: wave 4s; */
  /* } */

  /* ::after .imgWrapper {
    width: 60vw;
    height: 60vw;
    border-radius: 30vw;
    opacity: 0;
    transition: 2s;
  } */
`

// ReactDOM.render(
//   <HandleMouseEnter name="World" />,
//   document.getElementById('container')
// )

export default HandleMouseEnter
