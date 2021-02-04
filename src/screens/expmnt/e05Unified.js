import React, { useState } from 'react'
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
import PPwd from '../../components/PPwd'
import PImgLayout01 from '../../components/PImgLayout01'
import PDivider from '../../components/PDivider'

// 3. for style
import styled from 'styled-components'
import Close from '@material-ui/icons/Close'

// import fullVideo from '../../img/e05_video.mp4'

// 4. Static Resources

//——*——*——*——*——*——//
const e05Unified = () => {
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
      <PPwd />
      <PCover
        title="Unified Interface "
        desc="Universal Interface concept for AIO/AR/VR"
        type="advanced concept visualization"
        year="2018"
        detail="project proposal support"
        imgSrc="e05_img02"
        icons={[]}
      />
      <POverview
        question={
          <p>
            “How users can work with consistent interface and UX system
            <br /> <span>from different platforms like AIO, AR and VR?</span>
          </p>
        }
      />

      <PParagraph desc="The purpose of the project was to envision the interface that gives coherent system on different platforms, such as All-in-one, AR, and VR. We focused on when devices are used for creating, which includes both 'seeing' and 'doing' experience." />
      <PImgLayout01 imgSrc="e05_img01" />
      <PImgLayout01 imgSrc="e05_img02" />
      {/* 
      <PVideo
        videoSrc={fullVideo}
        wide="true"
        playing="true"
        loop="true"
        muted="true"
        controls="false"
      /> */}
      <PDivider />
      <POutro
        line1="visualization for universal interface concept for different platforms."
        line2="interface design and concept visualization (contribution 50%)"
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

export default e05Unified
