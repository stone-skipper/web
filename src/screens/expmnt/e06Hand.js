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
import PInsightLR from '../../components/PInsightLR'
import PVideo from '../../components/PVideo'




// 3. for style
import styled from 'styled-components'
import Close from '@material-ui/icons/Close'
import LazyLoad from 'react-lazy-load'


import teaser from '../../img/p03_v01.mp4'

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
            url: 'https://dev.to/devdevcharlie/playing-beat-saber-in-the-browser-with-body-movements-using-posenet-tensorflow-js-36km',
            urltitle: 'Beat Saber with body movements',
            desc: 'by Charlie Gerard'
        },
        {
            url: 'https://medium.com/@kirstenlindsmith/translating-posenet-into-react-js-58f438c8605d',
            urltitle: 'Translating PoseNet into React.js',
            desc: 'by Kirsten Lindsmith'
        },

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

    var insightImgs = [
        {
            imgSrc: 'e06_img01',
            number: '01',
            title: 'Hands-free communication',
            desc:
                "When we do zoom calls, hands will stay free from keyboards or mouse, allowing more natural gestures during the communication."
        },
        {
            imgSrc: 'e06_img03',
            number: '02',
            title: 'No remote-holder dominance',
            desc:
                "The person with a remote controller, or a console controller dominate the whole experience. Everyone will be able to raise hands and interact, rather than struggling with remote controller keys."
        },
        {
            imgSrc: 'e06_img04',
            number: '03',
            title: 'Break the boundary of the screens',
            desc:
                'We interact with a large meeting screen via personal laptops or with the touchscreen, limiting the interaction - or even the control of the communication to a few people. Anyone, even from the far back within the view of camera will draw on the board, interact with materials.'
        }
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
                imgSrc="e06_img27"
                icons={[]}
                bkwrapper={true}
            />
            <POverview
                question={
                    <p>
                        combine machine learning to enable
                        <br /><span>another way of interacting with a device</span><br />
                    - without no additional accessories</p>
                }
            />
            <PParagraph desc="Hand gesture interaction is not something new. There have been several peripherals for the hand recognition like leap motion, and some wearables. But something already existing with our devices can do the similar things, when it's supported with machine learning. This web experiment is made with ReactJS and Tensorflow Handpose model, using your webcam on laptop to read your hands and motions." />
            {/* <LazyLoad height="135vh" offset={100} once>
                <PImgLayout01 imgSrc="e06_img03" />
            </LazyLoad> */}
            <LazyLoad height="120vh" offset={100} once>
                <PVideo
                    videoSrc="https://vimeo.com/509466063"
                    wide={true}
                    playing={true}
                    loop={true}
                    muted={true}
                    controls={false}
                />
            </LazyLoad>

            <PInsightLR
                imgs={insightImgs}
                title="natural interaction with devices and people"
                desc="No additional accessory is required to add one more way to interact with your screen. This can allow more intuitive interaction, especially for communication between people and the usage of devices in groups."
            />

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
                    desc="Started with building simple components like status modal, basic tap function, buttons, and expanding to actual application to several interactions."
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
                    desc="Get the cursor position data continously and turn it into visual. The cursur is where the plus sign is, which is the middle point of the thumb and the index finger."
                    links={[
                        {
                            linkSrc: 'https://handgesture-react.netlify.app',
                            linkTitle: 'Try by yourself'
                        }
                    ]}
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
                    desc="I created a function that recognizes when the thumb and the index finger(or the middle finger) points are close enough. This triggers the main clicking function, and the middle finger tap serves as an additional clicking function."
                    links={[
                        {
                            linkSrc: 'https://handgesture-react.netlify.app/interactions',
                            linkTitle: 'Try by yourself'
                        }
                    ]}
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
                    desc="It's like a console window related to this hand cursor. You can also check which element is being hovered, or toggle some visibilities and functions."
                    links={[
                        {
                            linkSrc: 'https://handgesture-react.netlify.app/interactions',
                            linkTitle: 'Try by yourself'
                        }
                    ]}
                />
            </LazyLoad>

            <PDivider />

            <LazyLoad height="70vh" offset={1000} once>
                <PPrototype
                    videoSrc="https://vimeo.com/507996238"
                    title={
                        <h1>
                            <span>04/</span> <br />
hover
            </h1>
                    }
                    desc="It was the simplest function I can build. I made a component that recognizes when the cursor within it, and reacts in a certain way."
                    links={[
                        {
                            linkSrc: 'https://handgesture-react.netlify.app/01',
                            linkTitle: 'Try by yourself'
                        }
                    ]}
                />
            </LazyLoad>
            <LazyLoad height="70vh" offset={1000} once>
                <PPrototype
                    videoSrc="https://vimeo.com/507996413"
                    title={
                        <h1>
                            <span>05/</span> <br />
Hover and click
            </h1>
                    }
                    desc="By developing the hover function, the same component also recognizes if the cursor is within the element and whether the tap was triggered at the same time."
                    links={[
                        {
                            linkSrc: 'https://handgesture-react.netlify.app/02',
                            linkTitle: 'Try by yourself'
                        }
                    ]}
                />
            </LazyLoad>

            <LazyLoad height="70vh" offset={1000} once>
                <PPrototype
                    videoSrc="https://vimeo.com/509466030"
                    title={
                        <h1>
                            <span>06/ </span>
                            <br />
next slide please           </h1>
                    }
                    desc="As this experiment initially started as an application for Zoom, I developed this function to apply on skipping through slides while talking. Same thing can be done with mouse and keyboard, but this allows more natural gesture for communication to happen, which I believe helpful in speaking more naturally."
                    links={[
                        {
                            linkSrc: 'https://handgesture-react.netlify.app/03',
                            linkTitle: 'Try by yourself'
                        }
                    ]}
                />
            </LazyLoad>
            <LazyLoad height="70vh" offset={1000} once>
                <PPrototype
                    videoSrc="https://vimeo.com/507996505"
                    title={
                        <h1>
                            <span>07/ </span>
                            <br />
draw            </h1>
                    }
                    desc="Though I didn't fully develop this function to have smooth lines, this function draws lines during a tap."
                    links={[
                        {
                            linkSrc: 'https://handgesture-react.netlify.app/04',
                            linkTitle: 'Try by yourself'
                        }
                    ]}
                />
            </LazyLoad>
            {/* <PDivider /> */}

            <LazyLoad height="70vh" offset={1000} once>
                <PPrototype
                    videoSrc="https://vimeo.com/507996454"
                    title={
                        <h1>
                            <span>08/ </span>
                            <br />
weave            </h1>
                    }
                    desc="As I develop several interactions, what I really enjoyed most was its different tactility I feel by tapping, which is way different from clicking on a mouse. Index finger tap is for vertical lines, and the middle finger tap is for horizontal lines."
                    links={[
                        {
                            linkSrc: 'https://handgesture-react.netlify.app/06',
                            linkTitle: 'Try by yourself'
                        }
                    ]}
                />
            </LazyLoad>


            <LazyLoad height="70vh" offset={1000} once>
                <PPrototype
                    videoSrc="https://vimeo.com/507996369"
                    title={
                        <h1>
                            <span>09/</span> <br />
stamp
            </h1>
                    }
                    desc="Feels pretty good when you tap in the air and something happens!"
                    links={[
                        {
                            linkSrc: 'https://handgesture-react.netlify.app/05',
                            linkTitle: 'Try by yourself'
                        }
                    ]}
                />
            </LazyLoad>
            <LazyLoad height="70vh" offset={1000} once>
                <PPrototype
                    videoSrc="https://vimeo.com/507996268"
                    title={
                        <h1>
                            <span>10/</span> <br />
walk, step by step
            </h1>
                    }
                    desc="Inspired by a scene in the movie 'Her(2013)', gaming interaction of the avatar with hand. It's not exactly same, but I really liked its interaction, the way of the user controlling the avatar step by step."
                    links={[
                        {
                            linkSrc: 'https://handgesture-react.netlify.app/07',
                            linkTitle: 'Try by yourself'
                        }
                    ]}
                />
            </LazyLoad>



            <PDivider />
            <LazyLoad height="120vh" offset={100} once>
                <PVideo
                    videoSrc="https://vimeo.com/509465987"
                    wide={true}
                    playing={true}
                    loop={true}
                    muted={true}
                    controls={false}
                />
            </LazyLoad>

            <PReferences title="References" references={references} />
            <PDivider />
            <LazyLoad height="70vh" offset={100} once>
                <PProcess imgs={processImg} />
            </LazyLoad>

            <POutro
                line1="Personal study project"
                line2={
                    <h2>
                        I was interested in machine learning libraries, but most of them required python.<br /> I wanted to try something lightly and then I found out that tensorflow is providing some pre-trained model into javascript libraries I can even use with react.<br />This work is still in progress, to add more use cases and interactions.
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
