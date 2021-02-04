import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// 1. Dependencies
// 2. Components
import PCover from '../../components/PCover'
import POutro from '../../components/POutro'
import PPrototype from '../../components/PPrototype'
import PTitle from '../../components/PTitle'
import PLink from '../../components/PLink'
import PProcess from '../../components/PProcess'
import PParagraph from '../../components/PParagraph'
import PDivider from '../../components/PDivider'
import POverview from '../../components/POverview'
import PReferences from '../../components/PReferences'
import PSlideshow from '../../components/PSlideshow'
import PImgLayout01 from '../../components/PImgLayout01'



// 3. for style
import styled from 'styled-components'
import Close from '@material-ui/icons/Close'
import LazyLoad from 'react-lazy-load'

// 4. Static Resources

//——*——*——*——*——*——//

const e06Hand = () => {
    const references = [
        {
            url:
                'https://github.com/tensorflow/tfjs-models/tree/master/handpose',
            urltitle: 'Official docs from Tensorflow Handpose model',
            desc: 'Tensorflow'
        },
        {
            url: 'https://www.framer.com/learn/guide/designing-with-apis/',
            urltitle: 'Designing with APIs',
            desc: 'from Framer Learn'
        },
        {
            url: 'https://www.framer.com/support/using-framer-x/live-data/',
            urltitle: 'Working with Live Data',
            desc: 'from Framer Support'
        },
        {
            url: 'https://www.facebook.com/groups/framerkorea/',
            urltitle: 'Framer X Weekly challenge',
            desc: 'from Framer Korea'
        }
    ]


    var processImg2 = [
        { imgSrc: 'e06_img03' },
        { imgSrc: 'e06_img12' },
        { imgSrc: 'e06_img08' },
        { imgSrc: 'e06_img26' },
        { imgSrc: "e06_img10" },
        { imgSrc: "e06_img13" }
    ]

    var processImg = [
        {
            imgSrc: 'p03_img02',
            desc: 'idea exploration'
        },

        {
            imgSrc: 'p03_pr05',
            desc: 'material exploration'
        },
    ]

    return (
        <Stylede01Odd>
            <Link to="/works">
                <Close className="closeButton" />
            </Link>
            <PCover
                title="hand cursor"
                desc="intuitive gestural interaction recognition with a webcam"
                type="code + prototyping"
                year="2020"
                detail="Gestural interaction prototype"
                imgSrc="e06_img01"
                icons={[]}
                bkwrapper={true}
            />
            <POverview
                question={
                    <p>
                        When the camera starts to understand its view,
<br /><span>especially when we face each other</span></p>
                }
            />
            <PParagraph desc="Framer X is a prototyping tool, based on ReactJS. It requires a basic knowledge of coding, but it's a great tool to create working functions and interactions. Those are some of prototypes made with Framer X. I was more interested in physical interactions or multi-device interactions rather than microinteractions of UI. " />
            <PDivider />
            {/* <LazyLoad height="135vh" offset={100} once>
                <PImgLayout01 imgSrc="p03_img11" />
            </LazyLoad> */}
            <PLink
                desc="the work is still in progress, but"
                linkTitle="here's the link"
                link="https://handgesture-react.netlify.app"
            />
            <PTitle title="interaction explorations/" />
            <PDivider />

            <LazyLoad height="110vh" offset={100} once>
                <PSlideshow
                    imgs={processImg2}
                    title="interaction components"
                    desc="Started with building simple components like status modal, basic tap function, buttons, and expanding to actual application to several interactions"
                    dur={3000}
                    trdr={300}
                />
            </LazyLoad>

            {/* <PDivider /> */}
            <LazyLoad height="70vh" offset={1000} once>
                <PPrototype
                    videoSrc="https://vimeo.com/507996611"
                    title={
                        <h1>
                            <span>01/ </span> <br />
hand cursor heatmap            </h1>
                    }
                    desc="Find two smartphone to build cutting-edge foldable phone. The cheapest foldable display in the market :)"
                    links={[]}
                />
            </LazyLoad>
            {/* <PDivider /> */}



            <LazyLoad height="70vh" offset={1000} once>
                <PPrototype
                    videoSrc="https://vimeo.com/507996587"
                    title={
                        <h1>
                            <span>02/ </span> <br />
              index finger tap &<br /> middle finger tap
            </h1>
                    }
                    desc="As a study for the foldable phone ux with the fake-fold, I tweaked the fake-fold into an e-book interaction. "
                    links={[]}
                />
            </LazyLoad>

            {/* <PDivider /> */}
            <LazyLoad height="70vh" offset={1000} once>
                <PPrototype
                    videoSrc="https://vimeo.com/507996537"
                    title={
                        <h1>
                            <span>03/ </span> <br />
              status / control
            </h1>
                    }
                    desc="The problem with the some prototypes above is that they cannot be shared. They're connected to same socket so when someone access to one side of the prototypes, they cannot work as they should do. So this component is to pair two mobiles with the random code as their rooms. "
                    links={[

                    ]}
                />
            </LazyLoad>

            <PDivider />
            <LazyLoad height="70vh" offset={1000} once>
                <PPrototype
                    videoSrc="https://vimeo.com/507996505"
                    title={
                        <h1>
                            <span>04/ </span>
                            <br />
              tap and draw
            </h1>
                    }
                    desc="During the pandemic, I've been doing home workout. I found it annoying  to control my smartphone for setting a timer, so I made a voice-controlled timer interaction. Of course, Siri and Bixby can do the same thing, but in this web-app you don't need to call those AI assistant with full sentences. "
                    links={[
                        // {
                        //     linkSrc: 'https://workoutvoice.netlify.com/',
                        //     linkTitle:
                        //         'Try by yourself - only available on Android Google browser'
                        // }
                    ]}
                />
            </LazyLoad>
            {/* <PDivider /> */}

            <LazyLoad height="70vh" offset={1000} once>
                <PPrototype
                    videoSrc="https://vimeo.com/507996454"
                    title={
                        <h1>
                            <span>05/ </span>
                            <br />
              Weave with your hand
            </h1>
                    }
                    desc="Inspired by the film 'Parasite' and the 'Stranger Things'. Longpress and shortpress for trying your own morse code. "
                    links={[

                    ]}
                />
            </LazyLoad>

            <LazyLoad height="70vh" offset={1000} once>
                <PPrototype
                    videoSrc="https://vimeo.com/507996413"
                    title={
                        <h1>
                            <span>06/</span> <br />
Hover and click
            </h1>
                    }
                    desc="A scroll effect that scales contents like it's scrolling in 3d cylinder."
                    links={[

                    ]}
                />
            </LazyLoad>

            <LazyLoad height="70vh" offset={1000} once>
                <PPrototype
                    videoSrc="https://vimeo.com/507996369"
                    title={
                        <h1>
                            <span>07/</span> <br />
stamp
            </h1>
                    }
                    desc="A scroll effect that scales contents like it's scrolling in 3d cylinder."
                    links={[

                    ]}
                />
            </LazyLoad>
            <LazyLoad height="70vh" offset={1000} once>
                <PPrototype
                    videoSrc="https://vimeo.com/507996268"
                    title={
                        <h1>
                            <span>08/</span> <br />
walk, step by step
            </h1>
                    }
                    desc="A scroll effect that scales contents like it's scrolling in 3d cylinder."
                    links={[

                    ]}
                />
            </LazyLoad>
            <LazyLoad height="70vh" offset={1000} once>
                <PPrototype
                    videoSrc="https://vimeo.com/507996238"
                    title={
                        <h1>
                            <span>09/</span> <br />
hover
            </h1>
                    }
                    desc="A scroll effect that scales contents like it's scrolling in 3d cylinder."
                    links={[

                    ]}
                />
            </LazyLoad>


            <PDivider />


            <PReferences title="References" references={references} />
            <PDivider />
            <LazyLoad height="70vh" offset={100} once>
                <PProcess imgs={processImg} />
            </LazyLoad>

            <POutro
                line1="Personal study project"
                line2={
                    <h2>
                        This is the archive of prototypes I made with Framer X, as a part of
            learning a new tool. <br />
            With this new tool, I focused more creating new interactions and
            functions rather than user interface aspect.
          </h2>
                }
            />
        </Stylede01Odd>
    )
}

const Stylede01Odd = styled.div`
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

export default e06Hand
