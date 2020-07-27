import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// 1. Dependencies
// 2. Components
import PCover from '../../components/PCover'
import PConcept from '../../components/PConcept'
import PImgTxt01 from '../../components/PImgTxt01'
import PImgTxt01wide from '../../components/PImgTxt01wide'
import PImgTxt02 from '../../components/PImgTxt02'
import PImgTxt02Wide from '../../components/PImgTxt02Wide'
import PImgTxtCircle from '../../components/PImgTxtCircle'
import PImgLayout01 from '../../components/PImgLayout01'
import PImgLayout02 from '../../components/PImgLayout02'
import PDrawing from '../../components/PDrawing'
import POverview from '../../components/POverview'
import PProcess from '../../components/PProcess'
import PGif from '../../components/PGif'
import POutro from '../../components/POutro'

// 3. for style
import styled from 'styled-components'
import Close from '@material-ui/icons/Close'
import LazyLoad from 'react-lazy-load'

// 4. Static Resources

//——*——*——*——*——*——//

const p01Idly = () => {
  var imgLayout01 = [
    {
      imgSrc: 'p01_img06',
      desc: 'Regular sounds that make you calm'
    },
    {
      imgSrc: 'p01_img07',
      desc: 'Soft fidget effect from an elastic material'
    },
    {
      imgSrc: 'p01_img08',
      desc: 'Doing nothing as a task to finish'
    }
  ]
  var imgLayout02 = [
    {
      imgSrc: 'p01_img09',
      desc: ''
    }
  ]
  var processImg = [
    {
      imgSrc: 'p01_pr01',
      desc: 'fidget exploration'
    },
    {
      imgSrc: 'p01_pr03',
      desc: '3d prototyping'
    },
    {
      imgSrc: 'p01_pr02',
      desc: '3d prototyping'
    },
    {
      imgSrc: 'p01_pr04',
      desc: '3d prototyping'
    }
  ]
  var circleImgs = [
    {
      imgSrc: 'p01_img12',
      desc: 'seconds flow in your palm with sounds and movements'
    },
    {
      imgSrc: 'p01_img11',
      desc: 'softness and flexibility deliver nice relaxation'
    },
    { imgSrc: 'p01_img04', desc: 'only the seconde hand, and the 25-min guage' }
  ]
  return (
    <Styledp01Idly>
      <Link to="/works">
        <Close className="closeButton" />
      </Link>
      <LazyLoad height="110vh" offset={100} once>
        <PCover
          title="idly"
          desc="a timer that makes you do nothing"
          type="industrial design"
          year="2017"
          detail="personal work"
          imgSrc="p01_thumb"
          icons={[]}
        />
      </LazyLoad>
      <POverview
        question={
          <p>
            "There are lots of tools to make us productive. <br />
            But what about vice versa?"
          </p>
        }
      />
      <LazyLoad height="120vh" offset={100} once>
        <PDrawing
          imgSrc="p01_sketch"
          title="It's hard to focus on doing nothing"
          desc="Taking a rest is not that easy. We get easily distracted from doing nothing, by sounds of other people, small thoughts in your mind, and an impatience of staying idle. "
        />
      </LazyLoad>
      <LazyLoad height="110vh" offset={100} once>
        <PImgTxtCircle
          imgs={imgLayout01}
          title="Use the sense of touch and time"
          desc="In this project, I wanted a tool for ‘easy and enjoyable relaxation’, rather than get bored or distracted while trying high-level meditation. Through interviews and explorations of calming activities, I found those three factors effective. "
        />
      </LazyLoad>
      <LazyLoad height="120vh" offset={100} once>
        <PConcept
          imgSrc="p01_concept"
          concept={
            <h1>
              A tool to make you stay <span>idle</span>
              {/* Stop working, stay <span>idly</span> */}
            </h1>
          }
          user="workaholics who need a rest"
          desc="idly is a timer that makes you do nothing, a tool for the relaxation of your mind and senses. "
          txtColor="black"
        />
      </LazyLoad>
      <LazyLoad height="130vh" offset={100} once>
        <PImgLayout01 imgSrc="p01_img16" />
      </LazyLoad>
      <LazyLoad height="110vh" offset={100} once>
        <PImgTxt01
          imgs={imgLayout02}
          title="Time only flows in your palm"
          desc="To turn on the timer, you can simply hold the product in your palm. Then it starts ticking, meaning that you're starting your relaxing mode. "
        />
      </LazyLoad>
      <LazyLoad height="110vh" offset={100} once>
        <PImgTxtCircle
          imgs={circleImgs}
          title="A pocket watch you touch, feel, and wait"
          desc="The motif of the overall shape is a pocket watch. By adding appropriate materials and simplifying the interface solely
for the rest, I came up with a timer for relaxation."
        />
      </LazyLoad>
      <LazyLoad height="110vh" offset={100} once>
        <PGif
          imgSrc="p01_img17"
          title="this is a timer, only with a second hand "
          desc="The interface is simple. It only shows how the second flows, and a guage of total time. You can reset the guage with the aluminum button on the bottom. "
        />
      </LazyLoad>
      <LazyLoad height="120vh" offset={100} once>
        <PImgTxt02Wide
          imgSrc="p01_img02"
          title=""
          desc="Sounds and movements in your palm let you stay focuesd on doing nothing. "
          txtColor="white"
        />
      </LazyLoad>
      <LazyLoad height="90vh" offset={100} once>
        <PImgTxt02
          imgSrc="p01_img03"
          title={
            <plaintext>
              Softness <br />
              and flexibility
            </plaintext>
          }
          desc="The cover of the product is made with soft translucent silicone. The calming feeling from the texture keeps users to touch and hold it. "
        />
      </LazyLoad>
      <LazyLoad height="100vh" offset={100} once>
        <PImgLayout02 imgSrc1="p01_img13" imgSrc2="p01_img14" />
      </LazyLoad>
      <LazyLoad height="90vh" offset={100} once>
        <PImgLayout01 imgSrc="p01_img18" />
      </LazyLoad>
      <LazyLoad height="70vh" offset={100} once>
        <PProcess imgs={processImg} />
      </LazyLoad>

      <POutro
        line1="Personal project - Inspired and motivated from my personal experience of ‘burnout syndrome’."
        line2={
          <h2>
            I feel the society is full of struggles to move forward, get better,
            and compete with others all the time. <br /> At some point, I was
            exhausted by all the pressures and struggles, but I didn't really
            know how to deal with them.
            <br /> This project was to devise something that can help people
            like me, but also was to deliver a message on what's necessary tool
            for our life.
          </h2>
        }
      />
    </Styledp01Idly>
  )
}

const Styledp01Idly = styled.div`
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

export default p01Idly
