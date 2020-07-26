import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// 1. Dependencies
// 2. Components
import PCover from '../../components/PCover'
import POutro from '../../components/POutro'
import PPrototype from '../../components/PPrototype'
import PTitle from '../../components/PTitle'

import PIframe from '../../components/PIframe'
import PParagraph from '../../components/PParagraph'
import PDivider from '../../components/PDivider'
import POverview from '../../components/POverview'
import PReferences from '../../components/PReferences'

// 3. for style
import styled from 'styled-components'
import Close from '@material-ui/icons/Close'
import LazyLoad from 'react-lazy-load'

// 4. Static Resources

//——*——*——*——*——*——//

const e01Odd = () => {
  const references = [
    {
      url:
        'https://blog.framer.com/multiplayer-prototypes-with-framer-x-5bf7447e389e',
      urltitle: 'Multiplayer Prototypes with Framer X ',
      desc: 'by Steve Ruiz'
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
  return (
    <Stylede01Odd>
      <Link to="/works">
        <Close className="closeButton" />
      </Link>
      <PCover
        title="odder ways of using it"
        desc="odd interactions made with Framer X"
        type="code + prototyping"
        year="2019"
        detail="Framer X study project"
        imgSrc="e01_img01"
        icons={[]}
        bkwrapper={true}
      />
      <POverview
        question={
          <p>
            How to implement prototyping tool <br />
            for creating interactions for physical products
          </p>
        }
      />
      <PParagraph desc="Framer X is a prototyping tool, based on ReactJS. It requires a basic knowledge of coding, but it's a great tool to create working functions and interactions. Those are some of prototypes made with Framer X. I was more interested in physical interactions or multi-device interactions rather than microinteractions of UI. " />
      <PTitle title="01 physical interactions/" />
      <PDivider />
      <LazyLoad height="70vh" offset={1000} once>
        <PPrototype
          videoSrc="https://vimeo.com/415208247"
          title={
            <h1>
              <span>01/ </span>
              <br />
              Tilt to Scroll
            </h1>
          }
          desc="Scroll interaction by tilting a device. Especially good for night-time reading. Framer app with +ios 13 doesn't support device orientation, so this prototype only works on Android and under ios 13."
          links={[
            {
              linkSrc: 'https://01oddproject.netlify.com/',
              linkTitle: 'Try by yourself'
            },
            {
              linkSrc:
                'https://www.dropbox.com/s/mx653qo9eoo9lya/tiltscroll_share.framerx',
              linkTitle: 'Project File'
            }
          ]}
        />
      </LazyLoad>
      <PDivider />
      <LazyLoad height="70vh" offset={1000} once>
        <PPrototype
          videoSrc="https://vimeo.com/417935428"
          title={
            <h1>
              <span>02/ </span> <br />
              Fake-fold
            </h1>
          }
          desc="Find two smartphone to build cutting-edge foldable phone. The cheapest foldable display in the market :)"
          links={[]}
        />
      </LazyLoad>
      <PDivider />
      <LazyLoad height="70vh" offset={1000} once>
        <PPrototype
          videoSrc="https://vimeo.com/415208537"
          title={
            <h1>
              <span>03/ </span> <br />
              Controller and inputs
            </h1>
          }
          desc="Game controller with 2D joystick."
          links={[
            {
              linkSrc: 'https://10oddproject.netlify.com/',
              linkTitle: 'Try by yourself'
            }
          ]}
        />
      </LazyLoad>

      <PIframe
        url="https://10oddproject.netlify.com/"
        title={<h1>Joystick</h1>}
        desc=""
      />
      <PIframe
        url="https://12oddproject.netlify.com/"
        title={<h1>Trackpad</h1>}
        desc=""
      />
      <PIframe
        url="https://09oddproject.netlify.com/"
        title={<h1>Nintendo Rhythm Heaven</h1>}
        desc="Nintendo Rhythm Heaven's pen interaction. Tap and stay, or flick!"
        links={[
          {
            linkSrc: 'https://09oddproject.netlify.com/',
            linkTitle: 'Try by yourself'
          }
        ]}
      />
      <PDivider />
      <PPrototype
        videoSrc="https://vimeo.com/417937671"
        title={
          <h1>
            <span>04/ </span> <br />
            Wireless game controller
          </h1>
        }
        desc="Using deviceorientation value from the mobile to control the position and rotation of the camera in Aframe environment. Aframe.io + socket.io"
        links={[]}
      />
      <PDivider />
      <LazyLoad height="70vh" offset={1000} once>
        <PPrototype
          videoSrc="https://vimeo.com/431521800"
          title={
            <h1>
              <span>05/ </span> <br />
              Flipbook
            </h1>
          }
          desc="As a study for the foldable phone ux with the fake-fold, I tweaked the fake-fold into an e-book interaction. "
          links={[]}
        />
      </LazyLoad>

      <PDivider />
      <LazyLoad height="70vh" offset={1000} once>
        <PPrototype
          videoSrc="https://vimeo.com/431521272"
          title={
            <h1>
              <span>06/ </span> <br />
              Pair phones
            </h1>
          }
          desc="The problem with the some prototypes above is that they cannot be shared. They're connected to same socket so when someone access to one side of the prototypes, they cannot work as they should do. So this component is to pair two mobiles with the random code as their rooms. "
          links={[
            {
              linkSrc: 'https://pair-a.netlify.app',
              linkTitle: 'Pair A - with the random code generated'
            },
            {
              linkSrc: 'https://pair-b.netlify.app',
              linkTitle: 'Pair B - with the number pad'
            }
          ]}
        />
      </LazyLoad>

      <PTitle title="02 odd interfaces/" />
      <PDivider />
      <LazyLoad height="70vh" offset={1000} once>
        <PPrototype
          videoSrc="https://vimeo.com/415208441"
          title={
            <h1>
              <span>01/ </span>
              <br />
              Morse code
            </h1>
          }
          desc="Inspired by the film 'Parasite' and the 'Stranger Things'. Longpress and shortpress for trying your own morse code. "
          links={[
            {
              linkSrc: 'https://02oddproject.netlify.com/',
              linkTitle: 'Try by yourself'
            },
            {
              linkSrc:
                'https://www.dropbox.com/s/jng02vduba7cjfo/Morse.framerx',
              linkTitle: 'Project File'
            }
          ]}
        />
      </LazyLoad>
      <PIframe url="https://02oddproject.netlify.com/" title="" desc="" />
      <PDivider />
      <LazyLoad height="70vh" offset={1000} once>
        <PPrototype
          videoSrc="https://vimeo.com/417905262"
          title={
            <h1>
              <span>02/</span> <br />
              Cylinder scroll
            </h1>
          }
          desc="A scroll effect that scales contents like it's scrolling in 3d cylinder."
          links={[
            {
              linkSrc: 'https://05oddproject.netlify.com/',
              linkTitle: 'Try by yourself'
            },
            {
              linkSrc:
                'https://www.dropbox.com/s/rq3ic0l4u3qnnma/cylinderscroll_share.framerx',
              linkTitle: 'Project File'
            }
          ]}
        />
      </LazyLoad>
      <PIframe url="https://05oddproject.netlify.com/" title="" desc="" />
      <PDivider />
      <LazyLoad height="70vh" offset={1000} once>
        <PPrototype
          videoSrc="https://vimeo.com/415208599"
          title={
            <h1>
              <span>03/</span> <br />
              Annoying Player
            </h1>
          }
          desc="Music goes on as you move your finger on the screen. Keep your fingers moving on the screen to keep listening!"
          links={[
            {
              linkSrc: 'https://08oddproject.netlify.com/',
              linkTitle: 'Try by yourself'
            },
            {
              linkSrc: '',
              linkTitle: 'Project File'
            }
          ]}
        />
      </LazyLoad>
      <PIframe url="https://08oddproject.netlify.com/" title="" desc="" />
      <PDivider />
      <LazyLoad height="70vh" offset={1000} once>
        <PPrototype
          videoSrc="https://vimeo.com/417949198"
          title={
            <h1>
              <span>04/</span> <br />
              Color Timer
            </h1>
          }
          desc="One minute timer with random color pattern"
          links={[
            {
              linkSrc: 'https://11oddproject.netlify.com/',
              linkTitle: 'Try by yourself'
            },
            {
              linkSrc: '',
              linkTitle: 'Project File'
            }
          ]}
        />
      </LazyLoad>
      <PIframe url="https://11oddproject.netlify.com/" title="" desc="" />

      <PTitle title="components/" />
      <PDivider />
      <LazyLoad height="70vh" offset={1000} once>
        <PPrototype
          videoSrc="https://vimeo.com/440681572"
          title={
            <h1>
              <span>01/</span>
              <br />
              Nasa Astronomy picture of the day
            </h1>
          }
          desc="First component by me. Using Nasa APOD API, you can choose a date to load images of fascinating images from the space."
          links={[
            {
              linkSrc:
                'https://packages.framer.com/package/lsm4968/nasa-astronomy-picture-of-the-day',
              linkTitle: 'Component Download'
            }
          ]}
        />
      </LazyLoad>
      <PDivider />
      <LazyLoad height="70vh" offset={1000} once>
        <PPrototype
          videoSrc="https://vimeo.com/440683796"
          title={
            <h1>
              <span>02/</span>
              <br />
              Aframe environment component
            </h1>
          }
          desc="simple aframe environment set-up with a list of basic environments to choose from."
          links={[
            {
              linkSrc:
                'https://packages.framer.com/package/lsm4968/a-frame-environment-component',
              linkTitle: 'Component Download'
            }
          ]}
        />
      </LazyLoad>
      <PDivider />

      <PReferences title="References" references={references} />
      <PDivider />

      <POutro
        line1="Personal study project"
        line2={
          <plaintext>
            This is the archive of prototypes I made with Framer X, as a part of
            learning a new tool. <br />
            With this new tool, I focused more creating new interactions and
            functions rather than user interface aspect.
          </plaintext>
        }
      />
    </Stylede01Odd>
  )
}

const Stylede01Odd = styled.div`
  width: 100vw;
  height: 100%;
  background-color: red;
  color: white;
  z-index: 10000;
  position: absolute;
  & .closeButton {
    position: fixed;
    top: 3vw;
    right: 3vw;
    font-size: 2em;
    z-index: 100000000;
  }
`

export default e01Odd
