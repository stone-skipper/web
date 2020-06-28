import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// 1. Dependencies
// 2. Components
import PCover from '../../components/PCover'
import POutro from '../../components/POutro'
import PProcess from '../../components/PProcess'
import PVideo from '../../components/PVideo'
import POverview from '../../components/POverview'
import PParagraph from '../../components/PParagraph'
import PLink from '../../components/PLink'
// 3. for style
import styled from 'styled-components'
import Close from '@material-ui/icons/Close'

// 4. Static Resources

//——*——*——*——*——*——//

const e02Faceband = () => {
  var processImg = [
    {
      imgSrc: 'e02_pr01',
      desc: 'quick UI sketch'
    },
    {
      imgSrc: 'e02_pr02',
      desc: 'UI development'
    },
    {
      imgSrc: 'e02_pr04',
      desc: '3d assets design'
    },
    {
      imgSrc: 'e02_pr03',
      desc: 'Development on Spark AR'
    }
  ]
  return (
    <Stylede02Faceband>
      <Link to="/works">
        <Close className="closeButton" />
      </Link>
      <PCover
        title="Faceband"
        desc="Play the band together with your face"
        type="code + prototyping"
        year="2019"
        detail="Facebook online hackathon challenge"
        imgSrc="e02_img02"
        icons={[]}
      />
      <POverview
        question={
          <p>
            “How Spark AR can promote
            <br /> <span>more communication and interaction </span>between
            people,
            <br />
            rather than remaing as filter effects?"
          </p>
        }
      />
      <PParagraph desc="When we started to explore the functions and usages of Spark AR with own phones, we found we're just looking at own face with eye-catching filter effects. We wanted people to look at each other more with the Spark AR effect, make fun memories, and be together. " />
      <PVideo videoSrc="https://vimeo.com/361223684" />
      <PLink
        desc="submission on Devpost with more resources and processes"
        linkTitle="here"
        link="https://devpost.com/software/faceband"
      />
      <PProcess imgs={processImg} />
      <POutro
        line1="1 months online hackathon challenge with the team from Facebook Community Seoul"
        line2="I collaborated with developers and UI designers, and my role was to create a UX flow and design 3d assets for the filter."
      />
    </Stylede02Faceband>
  )
}

const Stylede02Faceband = styled.div`
  width: 100vw;
  height: 100%;
  background-color: red;
  color: white;
  z-index: 10000;
  position: absolute;
  & .closeButton {
    position: fixed;
    top: 3vw;
    right: 3vw;
    font-size: 2em;
    z-index: 100000000;
  }
`

export default e02Faceband
