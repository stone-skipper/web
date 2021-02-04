import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 1. Dependencies
// 2. Components
import ReactPlayer from 'react-player'
// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//——*——*——*——*——*——//

const PVideo = props => {
  const { videoSrc, wide, playing, loop, muted, controls } = props
  return (
    <StyledPVideo wide={wide}>
      <ReactPlayer
        url={videoSrc}
        id="reactPlayer"
        width={wide ? '94vw' : '100vw'}
        playing={playing}
        loop={loop}
        muted={muted}
        controls={controls}
      />
    </StyledPVideo>
  )
}

const StyledPVideo = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  padding-left: ${props => (props.wide ? '3vw' : 0)};
  margin-bottom: 15vh;
  @media (max-width: 1024px) {
    height: 30vh;
  }
  #reactPlayer {
    height: 100vh !important;

    @media (max-width: 1024px) {
      height: 30vh !important;
      margin: 0;
      padding: 0;
    }
  }
`

export default PVideo
