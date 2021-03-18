import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// 1. Dependencies
// 2. Components
import PCover from '../../components/PCover'
import PConcept from '../../components/PConcept'
import PImgTxt01 from '../../components/PImgTxt01'
import PImgTxt01wide from '../../components/PImgTxt01wide'
import PImgTxt02 from '../../components/PImgTxt02'
import PImgTxt03 from '../../components/PImgTxt03'
import PImgTxt02Wide from '../../components/PImgTxt02Wide'
import PImgTxtCircle from '../../components/PImgTxtCircle'
import PImgLayout01 from '../../components/PImgLayout01'
import PImgLayout02 from '../../components/PImgLayout02'
import PDrawing from '../../components/PDrawing'
import PImgComposition from '../../components/PImgComposition'
import PSlideshow from '../../components/PSlideshow'
import PPrototype from '../../components/PPrototype'
import PParagraph from '../../components/PParagraph'
import POverview from '../../components/POverview'
import PProcess from '../../components/PProcess'
import POutro from '../../components/POutro'
import PVideo from '../../components/PVideo'
import PTitle from '../../components/PTitle'
import PDivider from '../../components/PDivider'
import Pwip from '../../components/Pwip'
import PPwd from '../../components/PPwd'


import v01 from '../../img/p07_video01.mp4'
import v02 from '../../img/p07_video02.mp4'


// 3. for style
import styled from 'styled-components'
import Close from '@material-ui/icons/Close'
import LazyLoad from 'react-lazy-load'


// 4. Static Resources

//——*——*——*——*——*——//

const p07Twinworld = () => {
  var slideImgs = [
    { imgSrc: 'p07_img04' },
    { imgSrc: 'p07_img08' },
    { imgSrc: 'p07_img09' },
    { imgSrc: 'p07_img10' }
  ]
  var imgLayout01 = [
    {
      imgSrc: 'p04_img02',
      desc: 'Regular sounds that make you calm'
    },
    {
      imgSrc: 'p04_img08',
      desc: 'Soft fidget effect from an elastic material'
    }
  ]

  var processImg = [
    {
      imgSrc: 'p07_img06',
      desc: 'storyboarding'
    },
    // {
    //   imgSrc: 'p07_img12',
    //   desc: 'scene planning'
    // },
    {
      imgSrc: "p07_img14",
      desc: "video assets design"
    },
    {
      imgSrc: 'p07_pr04',
      desc: 'shooting day - storyboard'
    },
    {
      imgSrc: 'p07_pr03',
      desc: 'shooting day - gesture guidance'
    },
    {
      imgSrc: 'p07_img02',
      desc: 'compositing guidelines'
    },



  ]

  return (
    <Styledp07Twinworld>
      <Link to="/works">
        <Close className="closeButton" />
      </Link>
      {/* <Pwip /> */}
      <PPwd />

      <PCover
        title="twinworld"
        desc="vision scenario for AR social network service"
        type="AR service vision scenario & visualization"
        year="2020"
        detail="creative designer"
        imgSrc="p07_img01"
        bkwrapper={true}
        icons={[]}
      />
      <POverview question={<p>Play beyond the reality</p>} />
      <PParagraph desc="DoubleMe is a Korean start-up that specializes in volumetric communication technology, developing AI-supported human / space capturing technology and using it for immersive communication on VR / AR. Major role in this team as a creative designer was to find how their technologies can be applied to 'user experience', and develop it into a vision scenario." />

      {/* <LazyLoad height="120vh" offset={100} once>
        <PImgTxt01
          imgs={imgLayout01}
          title="Open-ended exploration for future devices"
          desc="The technology of the device in the scenario was not different from what we have now. We started from no guidelines or specifications for designing them, so we went through open-ended exploration about the level of technology, material, display type, and interactions."
        />
      </LazyLoad> */}
      <PTitle title="01 vision scenario" />
      <PDivider />

      <LazyLoad height="110vh" offset={100} once>
        <PImgComposition img1="p07_img06" img2="p07_img05" img3="p07_img07" />
      </LazyLoad>


      <LazyLoad height="100vh" offset={100} once>
        <PSlideshow
          imgs={slideImgs}
          title=""
          desc="Starting from setting some guidelines for the size, screen type, and camera styles, we got closer and closer to what we had in mind."
          dur={3000}
          trdr={300}
        />
      </LazyLoad>

      {/* <LazyLoad height="120vh" offset={100} once>
        <PVideo
          videoSrc={v01}
          wide={true}
          playing={true}
          loop={true}
          muted={true}
          controls={false}
        />
      </LazyLoad> */}

      <LazyLoad height="80vh" offset={1000} once>
        <PPrototype
          videoSrc={v01}
          title={
            <h1>
              <span>teaser video </span>
              <br />
              Play Beyond Reality
            </h1>
          }
          desc="This video highlights the main focus of the service - Create your space, Broadcast in your space, and Invite and interact"
          links={[
          ]}
        />
      </LazyLoad>

      <LazyLoad height="80vh" offset={1000} once>
        <PPrototype
          videoSrc={v02}
          title={
            <h1>
              <span>teaser video </span>
              <br />
Build yours.
            </h1>
          }
          desc="For the first MVP of the service - giving user a tool to create their space, the promotion started with showing how user can create different rooms and share them."
          links={[
          ]}
        />
      </LazyLoad>

      <PTitle title="02 experimental feature prototypes" />
      <PDivider />
      <PParagraph desc="I was in charge of developing interactive / experimental features for the service. Originally, most of the functions were set of static 3d objects to decorate the space, and I wanted to introduce more experiences and interactions that are not possible in the real world. Made with Unity." />

      <LazyLoad height="80vh" offset={1000} once>
        <PPrototype
          videoSrc="https://vimeo.com/525632389"
          title={
            <h1>
              <span>interaction model 01</span>
              <br />
              Gesture Particle Effect
            </h1>
          }
          desc="Even though users can invite friends to their space, there're not many functions ready for the interaction between those users. I created a gestural interaction that can use different sets of particles to play with other users."
          links={[
          ]}
        />
      </LazyLoad>
      <LazyLoad height="80vh" offset={1000} once>
        <PPrototype
          videoSrc="https://vimeo.com/525632551"
          title={
            <h1>
              <span>interaction model 02</span>
              <br />
              Tree Generator
            </h1>
          }
          desc="As a part of special function for the holiday, I made a tree generator. With the static objects, users can create their own version of tree with the magic box. "
          links={[
          ]}
        />
      </LazyLoad>


      <LazyLoad height="70vh" offset={100} once>
        <PProcess imgs={processImg} />
      </LazyLoad>
      <POutro
        line1="Creative designer (2020.05 - 2020.12 / 7 months)"
        line2={
          <h2>
            Twinworld is an AR application on Microsoft Hololens, allowing users to create their virtual AR space based on their physical environment, and interact with 3d contents and space of other users.
             <br />
            The company is in early stage of building the service, and I joined the team to be in charge of pinpoint their core value and visualizing their visions.
            <br />
            I led mainly two projects in this team - one to create a vision video, and the other to revise the ux / interaction of the AR application.
          </h2>
        }
      />
    </Styledp07Twinworld>
  )
}

const Styledp07Twinworld = styled.div`
width: 100vw;
height: max-content;
color: white;
z-index: 10000;
position: absolute;
overflow-x: hidden;
/* scroll-snap-type: y mandatory; */

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

export default p07Twinworld
