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
import PDrawing2 from '../../components/PDrawing2'
import PImgLayout01 from '../../components/PImgLayout01'
import PImgLayout02 from '../../components/PImgLayout02'
import POverview from '../../components/POverview'
import PProcess from '../../components/PProcess'
import POutro from '../../components/POutro'
import Pwip from '../../components/Pwip'
import PIframe from '../../components/PIframe'

// 3. for style
import styled from 'styled-components'
import Close from '@material-ui/icons/Close'
import PImgTxt01Wide from '../../components/PImgTxt01wide'

// 4. Static Resources

//——*——*——*——*——*——//

const p04Paragraph = () => {
  var imgLayout01 = [
    {
      imgSrc: 'p04_img19',
      desc: "People are not rulers; shouldn't expect a perfect scanning"
    },
    {
      imgSrc: 'p04_img18',
      desc: 'Classify information with different colors'
    },
    {
      imgSrc: 'p04_img21',
      desc: 'More than collecting; how to allow instant memo'
    }
  ]

  var drawings = [
    {
      imgSrc: 'p04_img22',
      title: 'What you pick from the book tells a lot',
      desc:
        'Rather than the list of books you read, what you think important tells a lot about your interest and what you need. '
    },
    {
      imgSrc: 'p04_img23',
      title: 'Dispersed traces of your reading',
      desc:
        "There's a personal preference in the medium for reading, but people naturally encounter various formats in reading. The marks and information also remain dispersed, which can be a valueable source of inspiration and information for you. "
    }
  ]

  var processImg = [
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
    <Styledp04Paragraph>
      <Link to="/works">
        <Close className="closeButton" />
      </Link>
      {/* <Pwip /> */}
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
      <PImgLayout01 imgSrc="p04_img09" />

      <PImgTxt03
        imgSrc="p04_img15"
        bg="#343333"
        title="How, and what do you read?"
        detail="(interviews with the people who read more than 1 books in a month)"
        txt1="Two types of readers;
for story, and for study"
        desc1="Everyone has a tendency in reading. Some enjoys the narratives and imaginations from the texts, and others perceive books as a source of inspiration and information.  "
        txt2="New reading services and mediums,
other than e-books and libraries"
        desc2="Great articles, postings, and weekly novels on web are a great reading
materials. And there're more text materials like magazines and papers
that's not often counted as reading."
        txt3="Different ways of collecting phrases and information"
        desc3="Everyone had a certain method of leaving a mark or collecting important texts.
It was often affected by which medium they use."
      />

      {/* UX insights from highlighters
       1. 한번에 깔끔한 선을 그을 수 없다. 
       2. 다양한 색깔별 분류
       3. 모은다 이외의 목적?(검색이나 질문, 의문, 메모를 할 수 있을까?)  */}

      <PDrawing2 imgs={drawings} />

      <PConcept
        imgSrc="p04_img07"
        bkWrapper={0.3}
        concept={
          <h1>
            an invisible highlighter for <span>collecting sentences </span>
          </h1>
        }
        user="people who loves reading in different mediums"
        desc="Paragraph is a pen-shpaed device
to invisibly highlight the sentences that impress you, 
and collect sentences across all the mediums"
        txtColor="white"
      />

      <PImgTxtCircle
        imgs={imgLayout01}
        title="Learning from existing behaviors"
        desc="A highlighter is the most intuitive tool in marking texts. While exploring some key features with the pen-shape, there were some insights to consider. "
      />
      <PImgTxt01
        imgs={[
          {
            imgSrc: 'p04_img13',
            desc: ''
          }
        ]}
        title="Invisible highlights over texts"
        desc="With the pen-shaped device that can easily carried and used in a familiar way, you can pair the pen with mobile devices via bluetooth. Those important texts and sentences are collected on the 'paragraph' app. "
      />

      <PImgTxt01Wide
        imgSrc="p04_img16"
        title="The text connected to data"
        desc="Rather than just saving the texts, they pass through E-book database to provide more automation and analyzation. This allows user to skip lots of steps to manage their data. And it also increases the accuracy of scanning. "
        txtColor="black"
      />
      <PIframe
        url="https://paragraph-proto.netlify.app"
        title="prototype for ux experiment"
        desc="I built a quick prototype to explain how the interface works with a buttton and a light. But as I made this step-to-step guide, I could realize my initial idea cannot really work. Though it is an interaction on a screen, it was detailed enough to test out the ux. "
      />

      <PImgTxt01
        imgs={[
          {
            imgSrc: 'p04_img14',
            desc: ''
          }
        ]}
        title="Across physical and digital texts"
        desc="Texts from different mediums are collected to same application 'paragraph'. When you highlight texts on mobile or web, the application provides one more option next to 'copy', 'Add to Paragraph'."
      />

      {/* <PImgTxt02
        imgSrc="p04_img12"
        title="Charging stand"
        desc="Charging a device is annoying part of the experience. The charging stand was motivated from the classic fountain pen stand. They have unique aesthetics, like the pen defying the gravity.  "
      /> */}

      <PImgLayout01 imgSrc="p04_img10" />
      <PImgLayout01 imgSrc="p04_img05" />

      <PProcess imgs={processImg} />
      <POutro
        line1="Personal project for the class 'Product Design Studio'"
        line2={
          <plaintext>
            I personally prefer reading texts on paper. But in recent years, my
            reading habits have changed, with different mediums of reading.
            <br />I thought the traditional way of reading could be changed,
            when it embraces some technology.
            <br /> This is a concept design, but I really hope I can have this
            kind of device.
          </plaintext>
        }
      />
    </Styledp04Paragraph>
  )
}

const Styledp04Paragraph = styled.div`
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

export default p04Paragraph
