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
import POverview from '../../components/POverview'
import PProcess from '../../components/PProcess'
import POutro from '../../components/POutro'
import Pwip from '../../components/Pwip'

// 3. for style
import styled from 'styled-components'
import Close from '@material-ui/icons/Close'
import LazyLoad from 'react-lazy-load'


// 4. Static Resources

//——*——*——*——*——*——//

const p07Twinworld = () => {
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
      imgSrc: 'p01_pr01',
      desc: 'fidget exploration'
    },
    {
      imgSrc: 'p01_pr03',
      desc: '3d prototyping'
    },
    {
      imgSrc: 'p04_pr03',
      desc: '3d prototyping'
    },
    {
      imgSrc: 'p04_pr04',
      desc: '3d prototyping'
    },
    {
      imgSrc: 'p04_pr05',
      desc: '3d prototyping'
    }
  ]

  return (
    <Styledp07Twinworld>
      <Link to="/works">
        <Close className="closeButton" />
      </Link>
      {/* <Pwip /> */}
      <PCover
        title="twinworld"
        desc="visualizing the vision of the AR application"
        type="AR service vision strategy & visualization"
        year="2020"
        detail="creative desiger"
        imgSrc="p07_img01"
        bkwrapper={true}
        icons={[]}
      />
      <POverview question={<p>Play beyond the reality</p>} />
      <LazyLoad height="70vh" offset={100} once>
        <PProcess imgs={processImg} />
      </LazyLoad>
      <POutro
        line1="Creative designer (2020.05 - 2020.12 / 7 months)"
        line2={
          <h2>
            Twinworld is an AR application on Microsoft Hololens, allowing users to create their virtual AR space based on their physical environment, and interact with 3d contents and space made by other users.
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
