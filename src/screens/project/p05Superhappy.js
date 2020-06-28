import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// 1. Dependencies
// 2. Components
import PCover from '../../components/PCover'
import PConcept from '../../components/PConcept'
import POverview from '../../components/POverview'
import PProcess from '../../components/PProcess'
import POutro from '../../components/POutro'
import PVideo from '../../components/PVideo'
import PSlideshow from '../../components/PSlideshow'
import PImgLayoutGif from '../../components/PImgLayoutGif'
import PImgLayout01 from '../../components/PImgLayout01'
import PImgLayout02 from '../../components/PImgLayout02'
import PImgTxt01Wide from '../../components/PImgTxt01wide'
// 3. for style
import styled from 'styled-components'
import Close from '@material-ui/icons/Close'
import LazyLoad from 'react-lazy-load'

// 4. Static Resources

//——*——*——*——*——*——//

const p05Superhappy = () => {
  var processImg = [
    {
      imgSrc: 'p05_pr01',
      desc: 'Ideation'
    },
    {
      imgSrc: 'p05_pr02',
      desc: 'Visual Language Exploration'
    },
    {
      imgSrc: 'p05_pr06',
      desc: 'Visual Development'
    },
    {
      imgSrc: 'p05_pr07',
      desc: 'Rendering Test'
    },
    {
      imgSrc: 'p05_pr08',
      desc: '1:1 Print Test'
    },
    {
      imgSrc: 'p05_pr09',
      desc: 'Color, Quality supervising'
    },
    {
      imgSrc: 'p05_pr10',
      desc: 'Color, Quality supervising'
    },
    {
      imgSrc: 'p05_pr11',
      desc: 'Color, Quality supervising'
    },
    {
      imgSrc: 'p05_pr12',
      desc: 'Installation'
    }
  ]
  var slideimgs1 = [
    { imgSrc: 'p05_img22' },
    { imgSrc: 'p05_img23' },
    { imgSrc: 'p05_img24' }
  ]
  var projectIcons = [{ imgSrc: 'p05_icon01' }, { imgSrc: 'p05_icon02' }]
  return (
    <Styledp05Superhappy>
      <Link to="/works">
        <Close className="closeButton" />
      </Link>
      <LazyLoad height="100vh" offset={100} once>
        <PCover
          title="superhappy"
          desc="visual direction for 2017 hid degree show"
          type="exhibition branding"
          year="2017"
          detail="team project"
          imgSrc="p05_main"
          icons={projectIcons}
        />
      </LazyLoad>
      <POverview
        question={
          <p>
            How are you feeling, <span>pre-designers?</span>
          </p>
        }
      />
      <LazyLoad height="100vh" offset={100} once>
        <PSlideshow
          imgs={slideimgs1}
          title="extract images from the feeling"
          desc="From the answers to the question above, we found common feelings. We're on the border between hope and discourage. The hope for the future makes us try hard, but accompanies  failures and suffers. This was where we started."
        />
      </LazyLoad>
      <LazyLoad height="120vh" offset={100} once>
        <PConcept
          imgSrc="p05_img27"
          concept={
            <h1>
              On the border between hope and discourage, <br />
              <span>well, we're superhappy.</span>
            </h1>
          }
          user="HID 2017 graduation exhibition"
          desc="The title 'super happy' in this exhibition symbolizes the crooked feeling of happiness, rather than its typical meaning-overwhelming emotions of happiness."
          txtColor="white"
        />
      </LazyLoad>
      <LazyLoad height="120vh" offset={100} once>
        <PImgTxt01Wide
          imgSrc="p05_img21"
          title="Visual Language"
          desc="The slanted, lowercase logo and title visually expresses this message. The key color throughout the project, Ultra-violet, is picked to show the ironic message of the title. It is visually notable both on screens and materials."
          txtColor="#5f2db2"
        />
      </LazyLoad>
      <PVideo
        videoSrc="https://vimeo.com/247831868"
        wide={false}
        playing={true}
        loop={true}
        muted={true}
        control={false}
      />

      <LazyLoad height="120vh" offset={100} once>
        <PImgTxt01Wide
          imgSrc="p05_img03"
          title="Editorial / Goods"
          desc="Hongik Industrial Design Department(HID)'s degreeshow has continued the traditional format of square art catalogue. Our team focused on keeping the format but still with the attitude of irony on it."
          txtColor="white"
        />
      </LazyLoad>
      <LazyLoad height="110vh" offset={100} once>
        <PImgLayout01 imgSrc="p05_img01" />
      </LazyLoad>
      <LazyLoad height="60vh" offset={100} once>
        <PImgLayout02 imgSrc1="p05_img07" imgSrc2="p05_img08" />
      </LazyLoad>
      <LazyLoad height="110vh" offset={100} once>
        <PImgLayout01 imgSrc="p05_img13" />
      </LazyLoad>
      <LazyLoad height="110vh" offset={100} once>
        <PImgLayout01 imgSrc="p05_img04" />
      </LazyLoad>
      <LazyLoad height="120vh" offset={100} once>
        <PImgLayout01 imgSrc="p05_img16" />
      </LazyLoad>
      <LazyLoad height="110vh" offset={100} once>
        <PImgTxt01Wide
          imgSrc="p05_img02"
          title="Web / Sns"
          desc="In previous exhibitions, most of deliverables were physical materials like exhibition books, posters, and flags which are only encountered on the site. We decided to build a web invitation for the first time, to effectively deliver our images and stories before people arrive to the gallery."
          txtColor="white"
        />
      </LazyLoad>
      <PImgLayoutGif imgSrc="p05_img19" />
      <PImgLayoutGif imgSrc="p05_img20" />
      <LazyLoad height="110vh" offset={100} once>
        <PImgTxt01Wide
          imgSrc="p05_img06"
          title="Space"
          desc="We closely worked together with the space design team to have consistent visual language throughout the space and other assets. We shared the process of thinking and developing the visual language, and came up with a great solution within our budget. The purple light and the boxes created an unusual mood for an exhibition, which perfectly goes along with our message and the visuals."
          txtColor="white"
        />
      </LazyLoad>
      <LazyLoad height="110vh" offset={100} once>
        <PImgLayout01 imgSrc="p05_img14" />
      </LazyLoad>
      <LazyLoad height="60vh" offset={100} once>
        <PImgLayout02 imgSrc1="p05_img17" imgSrc2="p05_img18" />
      </LazyLoad>
      <LazyLoad height="110vh" offset={100} once>
        <PImgLayout01 imgSrc="p05_img09" />
      </LazyLoad>
      <LazyLoad height="110vh" offset={100} once>
        <PImgLayout01 imgSrc="p05_img12" />
      </LazyLoad>
      <LazyLoad height="60vh" offset={100} once>
        <PImgLayout02 imgSrc1="p05_img11" imgSrc2="p05_img15" />
      </LazyLoad>
      <LazyLoad height="120vh" offset={100} once>
        <PImgLayout01 imgSrc="p05_img10" />
      </LazyLoad>
      <LazyLoad height="110vh" offset={100} once>
        <PImgTxt01Wide
          imgSrc="p05_img25"
          title="Event"
          desc="It started from a random idea for an opening ceremony that can actually make the participants 'superhappy'. We removed traditional 'ribbon cutting' ceremony and changed it to 'breaking pinata'. It's a small change, but it really played a big role in change the mood of the exhibition."
          txtColor="#5f2db2"
        />
      </LazyLoad>
      <LazyLoad height="110vh" offset={100} once>
        <PImgLayout01 imgSrc="p05_img26" />
      </LazyLoad>
      <LazyLoad height="70vh" offset={100} once>
        <PProcess imgs={processImg} />
      </LazyLoad>

      <POutro
        line1="Team project with Jiyoon Han / Hyunmyung Lee / Yesol Song"
        line2={
          <plaintext>
            I, as an art director, designed the main poster, the website, and
            the guidelines for other assets.
            <br /> We cooperated with space design team for setting the space
            and keep the consistent design tone and manner.{' '}
          </plaintext>
        }
      />
    </Styledp05Superhappy>
  )
}

const Styledp05Superhappy = styled.div`
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
    @media (max-width: 1024px) {
      top: 5vw;
      right: 5vw;
    }
  }
`

export default p05Superhappy
