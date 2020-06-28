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

// 4. Static Resources

//——*——*——*——*——*——//

const p07Porta = () => {
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
    <Styledp07Porta>
      <Link to="/works">
        <Close className="closeButton" />
      </Link>
      <Pwip />
      <PCover
        title="paragraph"
        desc="invisible highlighter for sentences"
        type="industrial design"
        year="2017"
        detail="personal work"
        imgSrc="p04_img02"
        icons={[]}
      />
      <POverview question={<p>Closing a book is not the end of reading.</p>} />
      <PImgTxt03
        imgSrc="p04_img15"
        bg="#343333"
        title="How, and what do you read?"
        txt1="Two types of readers;
for story, and for study"
        txt2="New reading services and mediums,
other than e-books and libraries"
        desc2="Great articles, postings, and weekly novels on web are a great reading
materials. And there're more text materials like magazines and papers
that's not often counted as reading."
        txt3="Different ways of collecting phrases and information"
        desc3="Everyone had a certain method of leaving a mark or collecting important texts.
It was often affected by which medium they use."
      />
      <PImgLayout01 imgSrc="p04_img09" />

      <PConcept
        imgSrc="p04_img07"
        concept={
          <h1>
            Read and <span>collect</span>
          </h1>
        }
        desc="Paragraph is a pen-shpaed device
to invisibly highlight the sentences that impress you, 
and collect sentences across all the mediums"
        txtColor="white"
      />
      <PImgTxt01
        imgs={[
          {
            imgSrc: 'p04_img13',
            desc: ''
          }
        ]}
        title="Invisible highlighter all over texts"
        desc="With the pen-shaped device that can easily carried and used in a familiar way, important texts and sentences are collected on the 'paragraph' platform. "
      />

      <PImgTxt01
        imgs={[
          {
            imgSrc: 'p04_img14',
            desc: ''
          }
        ]}
        title="Across physical and digital texts"
        desc="Texts from different mediums are collected to same application 'paragraph'."
      />

      {/* <PImgTxt01
        imgs={imgLayout01}
        title="Across physical and digital texts"
        desc="Texts from different mediums are collected to same application 'paragraph'."
      /> */}

      <PImgTxt02Wide
        imgSrc="p04_img10"
        title=""
        desc="Sounds and movements in your palm let you stay focuesd on doing nothing. "
        txtColor="white"
      />

      {/* <PImgLayout02 imgSrc1="p01_img13" imgSrc2="p01_img14" /> */}
      <PImgLayout01 imgSrc="p04_img10" />
      <PProcess imgs={processImg} />
      <POutro
        line1="Personal project"
        line2="Inspired and motivated from my personal experience of ‘burnout’"
      />
    </Styledp07Porta>
  )
}

const Styledp07Porta = styled.div`
  width: 100vw;
  height: 100%;
  background-color: red;
  color: white;
  z-index: 10000;
  position: absolute;
  /* scroll-snap-type: y mandatory; */

  & .closeButton {
    position: fixed;
    top: 3vw;
    right: 3vw;
    font-size: 2em;
    z-index: 100000000;
  }
`

export default p07Porta
