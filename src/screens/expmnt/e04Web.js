import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// 1. Dependencies
// 2. Components
import PCover from '../../components/PCover'
import POutro from '../../components/POutro'
import PProcess from '../../components/PProcess'
import Pwip from '../../components/Pwip'
import PVideo from '../../components/PVideo'
import POverview from '../../components/POverview'
import PParagraph from '../../components/PParagraph'
import PImgLayout01 from '../../components/PImgLayout01'
import PImgLayout02 from '../../components/PImgLayout02'
import PLink from '../../components/PLink'
import PIframe from '../../components/PIframe'

// 3. for style
import styled from 'styled-components'
import Close from '@material-ui/icons/Close'

// 4. Static Resources

//——*——*——*——*——*——//

const e04Web = () => {
  var processImg = [
    {
      imgSrc: 'e03_pr02',
      desc: 'Virtual environment setting'
    },
    {
      imgSrc: 'e03_pr03',
      desc: 'Virtual environment setting'
    },
    {
      imgSrc: 'e03_pr04',
      desc: 'Exhibition Installation'
    },
    {
      imgSrc: 'e03_pr05',
      desc: 'Exhibition Setting'
    }
  ]
  return (
    <Stylede04Web>
      <Link to="/works">
        <Close className="closeButton" />
      </Link>
      <Pwip />
      <PCover
        title="website v3"
        desc="the process of designing and building the portfolio website"
        type="code + the process behind"
        year="2019"
        detail="web design / front-end development (React)"
        imgSrc="e03_img02"
        icons={[]}
      />
      <POverview
        question={
          <p>
            the third version of my website - <br />
            processes and some thoughts
          </p>
        }
      />
      <PParagraph desc="Instagram, Netflix, KakaoBank. All kinds of digital services made our life easier by bringing those experiences in our palm. But with all the immersive technologies, what will we experience when they turn into 'space'? What's the next format of Netflix? Is it going to get back to a typical theater experience?" />
      <PImgLayout01 imgSrc="e03_img03" />
      <PImgLayout02 imgSrc1="e03_img01" imgSrc2="e03_pr02" />
      <PVideo
        videoSrc="https://www.youtube.com/watch?v=49EoEwOxShA"
        wide="false"
      />
      <PVideo
        videoSrc="https://vimeo.com/417901909"
        wide="false"
        playing="true"
        loop="true"
        muted="true"
      />

      <PLink
        desc="processes and thoughts (in Korean)"
        linkTitle="here"
        link="https://designpostscripts.tistory.com/2"
      />
      <PIframe
        url="https://stone-skipper.github.io/svs/#/"
        title="exhibition website for more details"
        frameheight="90vh"
        desc={
          <a href="https://stone-skipper.github.io/svs/#/">
            https://stone-skipper.github.io/svs/#/
            <br />
            built with React
          </a>
        }
      />

      <PProcess imgs={processImg} />
      <POutro
        line1="personal project"
        line2={
          <h2>
            The whole process of building a website takes a long time, especially when I'm still learning.
          </h2>
        }
      />
    </Stylede04Web>
  )
}

const Stylede04Web = styled.div`
  width: 100vw;
  height: max-content;
  color: white;
  z-index: 10000;
  position: absolute;
  overflow-x: hidden;

  & .closeButton {
    position: fixed;
    top: 3vw;
    right: 3vw;
    font-size: 2em;
    z-index: 100000000;
    @media (max-width: 1024px) {
      top: 5vw;
      right: 5vw;
    }
  }
`

export default e04Web
