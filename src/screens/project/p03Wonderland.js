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
import PImgLayout03 from '../../components/PImgLayout03'
import PImgLayout04 from '../../components/PImgLayout04'
import PSlideshow from '../../components/PSlideshow'
import PDivider from '../../components/PDivider'
import PDrawing from '../../components/PDrawing'
import POverview from '../../components/POverview'
import PProcess from '../../components/PProcess'
import PParagraph from '../../components/PParagraph'
import PImgComposition from '../../components/PImgComposition'
import PPwd from '../../components/PPwd'
import PGif from '../../components/PGif'
import POutro from '../../components/POutro'
import PVideo from '../../components/PVideo'

// 3. for style
import styled from 'styled-components'
import Close from '@material-ui/icons/Close'
import LazyLoad from 'react-lazy-load'

import teaser from '../../img/p03_v01.mp4'

// 4. Static Resources

//——*——*——*——*——*——//

const p03Wonderland = () => {
  var processImg = [
    {
      imgSrc: 'p03_img02',
      desc: 'idea exploration'
    },

    {
      imgSrc: 'p03_pr05',
      desc: 'material exploration'
    },
    {
      imgSrc: 'p03_img22',
      desc: 'sketches'
    },
    {
      imgSrc: 'p03_pr07',
      desc: '1:1 size check'
    },
    {
      imgSrc: 'p03_pr08',
      desc: 'prototype'
    },
    {
      imgSrc: 'p03_pr04',
      desc: 'anodizing'
    },
    {
      imgSrc: 'p03_pr11',
      desc: 'anodizing'
    },
    {
      imgSrc: 'p03_pr10',
      desc: 'material matching'
    },
    {
      imgSrc: 'p03_pr12',
      desc: 'silk printing'
    }
  ]
  var imgLayout01 = [
    {
      imgSrc: 'p03_img02',
      desc: ''
    }
  ]
  var imgLayout03 = [
    {
      imgSrc: 'p03_img27',
      desc: ''
    }
  ]

  var imgLayout02 = [
    {
      imgSrc: 'p03_img28',
      desc: 'ruggedness with wheel, buttons and partings'
    },
    {
      imgSrc: 'p03_img14',
      desc: 'metal texture and black screen'
    },
    {
      imgSrc: 'p03_img29',
      desc: 'asymmetric screen with unique notch'
    }
  ]

  var slideimgs1 = [
    { imgSrc: 'p03_img23' },
    { imgSrc: 'p03_img24' },
    { imgSrc: 'p03_img25' },
    { imgSrc: 'p03_img47' }
  ]

  var slideimgs2 = [
    { imgSrc: 'p03_img54' },
    { imgSrc: 'p03_img51' },
    { imgSrc: 'p03_img52' },
    { imgSrc: 'p03_img33' },
    { imgSrc: 'p03_img41' },
    { imgSrc: 'p03_img53' }
  ]

  var controllerImgs = [
    { imgSrc: 'p03_img61' },
    { imgSrc: 'p03_img62' },
    { imgSrc: 'p03_img63' },
    { imgSrc: 'p03_img64' },
    { imgSrc: 'p03_img65' }
  ]
  var processImg2 = [
    { imgSrc: 'p03_img22' },
    { imgSrc: 'p03_img17' },
    { imgSrc: 'p03_pr07' },
    { imgSrc: 'p03_pr08' }
  ]
  return (
    <Styledp03Wonderland>
      <Link to="/works">
        <Close className="closeButton" />
      </Link>
      {/* <PPwd /> */}
      <LazyLoad height="100vh" offset={100} once>
        <PCover
          title="wonderland"
          desc="conceptual devices for the near-future film "
          type="props design / industrial design"
          year="2019 - 2020"
          detail="team work"
          imgSrc="p03_img06"
          icons={[]}
          bkwrapper={false}
        />
      </LazyLoad>
      <POverview
        question={
          <p>
            Envisioning future devices for <br />
            sentimental sci-fi film
          </p>
        }
      />
      <PParagraph desc="The film 'Wonderland', directed by Taeyong Kim, is about the AI technology that recreates the deceased in a virtual world. I participated in the art production team for desigining the overall future devices, experiencing whole process of creating a film from a scenario." />
      <LazyLoad height="110vh" offset={100} once>
        <PImgTxt01
          imgs={imgLayout01}
          title="Open-ended exploration for future devices"
          desc="The technology of the device in the scenario was not different from what we have now. We started from no guidelines or specifications for designing them, so we went through open-ended exploration about the level of technology, material, display type, and interactions."
        />
      </LazyLoad>
      {/* <LazyLoad height="110vh" offset={100} once>
        <PImgTxt01wide
          imgSrc="p03_img31"
          title="The end of minimalism"
          desc="As we decided to stick to the similar level of technology, it became more important to create unfamiliar, disticntive style from the current smartphones."
          txtColor="white"
        />
      </LazyLoad> */}
      <LazyLoad height="110vh" offset={100} once>
        <PImgTxt01
          imgs={imgLayout02}
          title="Concept 'Future Classic'"
          desc="We defined the style of this near-future era as 'Future Classic'. We were inspired by the small sized devices with metal textures from the past, and wanted to reinterpret them into something else."
        />
      </LazyLoad>
      <LazyLoad height="100vh" offset={100} once>
        <PSlideshow
          imgs={processImg2}
          title=""
          desc="Starting from setting some guidelines for the size, screen type, and camera styles, we got closer and closer to what we had in mind."
          dur={3000}
          trdr={300}
        />
      </LazyLoad>
      <LazyLoad height="120vh" offset={100} once>
        <PConcept
          imgSrc="p03_img01"
          concept={<h1>Devices, the 7th character of the film</h1>}
          user="personas of the narrative"
          desc="Mobile devices in the story are the medium of communication between people and AIs. Though the film envisions the near future, those similar devices but with different tone and manner set the era aside from the current world where the viewers live. "
          txtColor="white"
        />
      </LazyLoad>
      <LazyLoad height="110vh" offset={100} once>
        <PImgTxt01
          imgs={imgLayout03}
          title="7th character of the film, devices"
          desc="Quite a lot of communication in the story happens through devices. It was so important to have an distinctive and consistent look of all the devices that appear throughout the narrative."
        />
      </LazyLoad>

      <PVideo
        videoSrc={teaser}
        wide={true}
        playing={true}
        loop={true}
        muted={true}
        controls={false}
      />

      <LazyLoad height="120vh" offset={100} once>
        <PImgTxt01wide
          imgSrc="p03_img43"
          title="mobile devices for 7 personas"
          desc=""
          txtColor="rgba(255,255,255,0.2)"
        />
      </LazyLoad>
      <LazyLoad height="110vh" offset={100} once>
        <PSlideshow
          imgs={slideimgs1}
          title="01/ The eye of the AI, camera"
          desc="In this story of the AIs, the camera was the eyes of them. Just as everyone has a different shapes of eyes, every device has a different shapes of its camera. A piece of camera overlaps a front and a rear camera. "
          dur={3000}
          trdr={300}
        />
      </LazyLoad>
      <LazyLoad height="110vh" offset={100} once>
        <PImgComposition img1="p03_img34" img2="p03_img32" img3="p03_img35" />
      </LazyLoad>
      <LazyLoad height="135vh" offset={100} once>
        <PImgLayout01 imgSrc="p03_img11" />
      </LazyLoad>
      <LazyLoad height="110vh" offset={100} once>
        <PImgComposition img1="p03_img37" img2="p03_img38" img3="p03_img39" />
      </LazyLoad>
      <LazyLoad height="110vh" offset={100} once>
        <PSlideshow
          imgs={slideimgs2}
          title="02/ The end of minimalism"
          desc="Unlike the mainstream of current design language, we focused on the aesthetics of complex shapes with partings, chamfers and details."
          dur={3000}
          trdr={300}
        />
      </LazyLoad>
      <LazyLoad height="110vh" offset={100} once>
        <PImgComposition img1="p03_img59" img2="p03_img55" img3="p03_img49" />
      </LazyLoad>
      <LazyLoad height="110vh" offset={100} once>
        <PGif imgSrc="p03_gif01" full={true} />
      </LazyLoad>
      <LazyLoad height="100vh" offset={100} once>
        <PImgComposition img1="p03_img01" img2="p03_img44" img3="p03_img45" />
      </LazyLoad>
      <LazyLoad height="120vh" offset={100} once>
        <PImgLayout01 imgSrc="p03_img09" />
      </LazyLoad>
      <LazyLoad height="110vh" offset={100} once>
        <PImgComposition img1="p03_img40" img2="p03_img41" img3="p03_img42" />
      </LazyLoad>
      <LazyLoad height="120vh" offset={100} once>
        <PGif imgSrc="p03_gif02" full={true} />
      </LazyLoad>

      <LazyLoad height="100vh" offset={100} once>
        <PImgComposition img1="p03_img48" img2="p03_img57" img3="p03_img54" />
      </LazyLoad>
      <PDivider />
      <LazyLoad height="120vh" offset={100} once>
        <PImgTxt01wide
          imgSrc="p03_img13"
          title="Foldable tablet"
          desc="While balancing the level of technology, we wanted to add something different from the current line-up of IT devices; foldable tablet. But even with CG, we still had to build the basic foldable structure within the budget."
          txtColor="white"
        />
      </LazyLoad>
      <LazyLoad height="120vh" offset={100} once>
        <PImgLayout01 imgSrc="p03_img30" />
      </LazyLoad>
      <LazyLoad height="100vh" offset={100} once>
        <PImgComposition img1="p03_img03" img2="p03_img18" img3="p03_img19" />
      </LazyLoad>
      <PDivider />
      <LazyLoad height="120vh" offset={100} once>
        <PImgTxt01wide
          imgSrc="p03_img60"
          title="and some controllers"
          desc="Not in a priority, but I also designed some control devices for the future office scene with new technologies. They are used for more tactical interactions for controlling high-tech system."
          txtColor="white"
        />
      </LazyLoad>
      <LazyLoad height="100vh" offset={100} once>
        <PSlideshow
          imgs={controllerImgs}
          title=""
          desc="The look of the office we envisioned was quite different from the current modern offices with bright lightings and slim devices. The tone of the office is more calm with devices with mass and weight. "
          dur={3000}
          trdr={300}
        />
      </LazyLoad>
      <PDivider />
      <LazyLoad height="110vh" offset={100} once>
        <PImgTxt01wide
          imgSrc="p03_img66"
          title="Unused concepts"
          desc="We tested different concepts for each devices, but many of them were not selected or omited for some reasons. But those explorations were truly inspiring, focusing emotional aspect of how it looks, rather than logical facts.  "
          txtColor="grey"
        />
      </LazyLoad>
      <LazyLoad height="70vh" offset={100} once>
        <PProcess imgs={processImg} />
      </LazyLoad>
      <POutro
        line1="Props designer"
        line2={
          <plaintext>
            The production team focused on creating a visual that looks familiar
            in the way we live, but with different tone and manner. <br />I
            mainly focused on the designs of devices and main props, and
            cooperated with other production designers who designed spaces and
            sets of the scenes.
            <br />I was a huge fan of SF films, and the great arts like 2001
            Space Odyssey, Her, Blade Runner, Interstellar, The arrival, OA...
            those really fascinated me and inspired me for my lifetime.
            <br />I was so lucky to experience the process of making a sci-fi
            film and be a part of the work. <br /> Art Direction : Ryu Seonghee
            / Seo Sungkyung
          </plaintext>
        }
      />
    </Styledp03Wonderland>
  )
}

const Styledp03Wonderland = styled.div`
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

export default p03Wonderland
