import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// 1. Dependencies
// 2. Components
import PCover from '../../components/PCover'
import PConcept from '../../components/PConcept'
import PImgTxt01 from '../../components/PImgTxt01'
import PImgTxt01Wide from '../../components/PImgTxt01wide'
import PParagraph from '../../components/PParagraph'
import PDrawing2 from '../../components/PDrawing2'
import PImgTxt02 from '../../components/PImgTxt02'
import PImgTxt02Wide from '../../components/PImgTxt02Wide'
import PImgTxtCircle from '../../components/PImgTxtCircle'
import PImgLayout01 from '../../components/PImgLayout01'
import PImgLayout02 from '../../components/PImgLayout02'
import PDrawing from '../../components/PDrawing'
import POverview from '../../components/POverview'
import PProcess from '../../components/PProcess'
import POutro from '../../components/POutro'
import PVideo from '../../components/PVideo'
import Pwip from '../../components/Pwip'
// 3. for style
import styled from 'styled-components'
import Close from '@material-ui/icons/Close'
import LazyLoad from 'react-lazy-load'

// 4. Static Resources

//——*——*——*——*——*——//

const p06Nofie = () => {
  var drawings = [
    {
      imgSrc: 'p06_img04',
      title: 'Beyond the sight',
      desc:
        'Nofie camera catches the moment with the people and the surrounding views. It provides an unique perspective that you cannot get from your camera. '
    },
    {
      imgSrc: 'p06_img05',
      title: 'Over the site',
      desc:
        'Live views become a great information. Nofie can be a great platform to take a look into great shows and events over the differet cities. '
    }
  ]

  var imgLayout01 = [
    {
      imgSrc: 'p06_img19',
      desc: ''
    },
    {
      imgSrc: 'p06_img20',
      desc: ''
    }
  ]
  var imgLayout02 = [
    {
      imgSrc: 'p06_img17',
      desc: ''
    }
  ]
  var processImg = [
    {
      imgSrc: 'p06_pr01',
      desc: 'ideation for service flow'
    },
    {
      imgSrc: 'p06_pr02',
      desc: 'inspirations'
    },
    {
      imgSrc: 'p06_pr03',
      desc: 'disassembly for structure study'
    },
    {
      imgSrc: 'p06_pr04',
      desc: 'sketch'
    },
    {
      imgSrc: 'p06_pr15',
      desc: 'form study'
    },
    {
      imgSrc: 'p06_pr16',
      desc: 'form study'
    },

    {
      imgSrc: 'p06_pr05',
      desc: '1:1 shape study'
    },
    {
      imgSrc: 'p06_pr06',
      desc: '1:1 shape study'
    },
    {
      imgSrc: 'p06_pr07',
      desc: '1st prototype'
    },
    {
      imgSrc: 'p06_pr17',
      desc: '1st prototype'
    },
    {
      imgSrc: 'p06_pr08',
      desc: '1st prototype'
    },
    {
      imgSrc: 'p06_pr09',
      desc: '2nd prototype'
    },
    {
      imgSrc: 'p06_pr10',
      desc: '2nd prototype'
    },
    {
      imgSrc: 'p06_pr11',
      desc: 'final shape'
    },
    {
      imgSrc: 'p06_pr12',
      desc: 'color / finishing'
    },
    {
      imgSrc: 'p06_pr13',
      desc: 'assembly'
    }
  ]
  var projectIcons = [{ imgSrc: 'p05_icon01' }, { imgSrc: 'p06_icon02' }]

  return (
    <Styledp06Nofie>
      <Link to="/works">
        <Close className="closeButton" />
      </Link>
      {/* <Pwip /> */}
      <LazyLoad height="100vh" offset={100} once>
        <PCover
          title="nofie"
          desc="reimagine the usage of security cameras"
          type="city service design"
          year="2017"
          detail="team work"
          imgSrc="p06_img01"
          icons={projectIcons}
        />
      </LazyLoad>
      <POverview
        question={
          <p>
            "The massive, unused footages of the security cameras
            <br />
            <span>as something usable data?</span>"
          </p>
        }
      />
      <LazyLoad height="100vh" offset={100} once>
        <PImgTxt01
          imgs={[{ imgSrc: 'p06_img11', desc: '' }]}
          title="Purposes of city services are changing"
          desc="The team was interested in the way people interact with spaces. After a few times of inspiration trips, the boundary of our focus grew bigger, into the 'city'. "
        />
      </LazyLoad>
      <LazyLoad height="110vh" offset={100} once>
        <PImgTxt01
          imgs={[{ imgSrc: 'p06_img07', desc: '' }]}
          title="through the eyes of cities"
          desc="Though massive amount of data is being accumulated in security cameras, the usage was highly limited for privacy. But what if we can appropriately winnow out right information from those data?"
        />
      </LazyLoad>
      <LazyLoad height="110vh" offset={100} once>
        <PConcept
          imgSrc="p06_img21"
          concept={
            <h1>
              New <span>perspective </span>to interact with the city
            </h1>
          }
          user="the public"
          desc="Nofie is a public service for a new city experience, giving people access to appropriate views from security cameras."
          txtColor="black"
        />
      </LazyLoad>
      <LazyLoad height="140vh" offset={100} once>
        <PImgLayout01 imgSrc="p06_img25" />
      </LazyLoad>
      {/* <PParagraph desc="The initial idea was simple. We  " /> */}
      <LazyLoad height="100vh" offset={100} once>
        <PDrawing2 imgs={drawings} />
      </LazyLoad>
      <LazyLoad height="100vh" offset={100} once>
        <PImgTxt01
          imgs={[
            { imgSrc: 'p06_img02', desc: 'beyond the sight' },
            { imgSrc: 'p06_img03', desc: 'over the site' }
          ]}
          title="Access from your mobile and web"
          desc="Photos from the unique perspectives with you and the space, or the view of the certain spaces are accessible from your devices. "
        />
      </LazyLoad>
      <LazyLoad height="110vh" offset={100} once>
        <PImgTxt01
          imgs={[{ imgSrc: 'p06_img18', desc: '' }]}
          title="service scenario in animation"
          desc="The way we communicate about the service is also a part of branding. To deliver the bright mood of the service, we made an animation about the service flow.  "
        />
      </LazyLoad>
      <PVideo
        videoSrc="https://vimeo.com/319148405"
        wide={false}
        playing={false}
        loop={true}
        muted={true}
        control={false}
      />
      <LazyLoad height="120vh" offset={100} once>
        <PImgTxt02Wide
          imgSrc="p06_img16"
          title="Working prototype "
          desc="We exhibited the working prototype of the service. It was valuable for us to test the idea and see how people interact with the service.  "
          txtColor="black"
        />
      </LazyLoad>
      <LazyLoad height="110vh" offset={100} once>
        <PImgTxt01Wide
          imgSrc="p06_img06"
          title="Form and Impression"
          desc="There’re solid perceptions and impressions about the security camera, being monitored, threatening, big brother, and scary eyes on you. Our goal was to change this impression into kind eyes. "
          txtColor="white"
        />
      </LazyLoad>
      <LazyLoad height="110vh" offset={100} once>
        <PImgTxt01
          imgs={imgLayout01}
          title="Dealing with the negative impression"
          desc="One of factors of the minacious impression is rigid and high posture. We came up with an intimate image as a motif. An eye contact with a bird, even though it is up on tall tree or building, it never feels overwhelming to you. "
        />
      </LazyLoad>
      <LazyLoad height="110vh" offset={100} once>
        <PImgLayout02 imgSrc1="p06_img22" imgSrc2="p06_img24" />
      </LazyLoad>
      <LazyLoad height="90vh" offset={100} once>
        <PImgTxt02
          imgSrc="p06_img17"
          title="Large scale mock up"
          desc="Since we wanted to have working prototype in the exhibition, we also built the mockup in real scale. The height has been modified to fit the exhibition space. It was designed to be disassembled for the efficiency in crafting it with CNC, and moving it for photoshooting and display. "
        />
      </LazyLoad>
      <LazyLoad height="80vh" offset={100} once>
        <PImgLayout02 imgSrc1="p06_img26" imgSrc2="p06_img27" />
      </LazyLoad>
      <LazyLoad height="70vh" offset={100} once>
        <PProcess imgs={processImg} />
      </LazyLoad>
      <POutro
        line1="2017 HID graudation exhibition - product design part"
        line2={
          <h2>
            Team project (contribution : 40%) with Yoojin Choi, Jieun Kim
            <br />
            This project involved various field of design, including industrial
            design, service design, and branding design, motion graphics, and
            working prototype with a working web.
          </h2>
        }
      />
    </Styledp06Nofie>
  )
}

const Styledp06Nofie = styled.div`
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

export default p06Nofie
