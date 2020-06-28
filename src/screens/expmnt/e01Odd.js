import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// 1. Dependencies
// 2. Components
import PCover from '../../components/PCover'
import POutro from '../../components/POutro'
import PPrototype from '../../components/PPrototype'
import PIframe from '../../components/PIframe'
import PParagraph from '../../components/PParagraph'
import PDivider from '../../components/PDivider'
import POverview from '../../components/POverview'
import PReferences from '../../components/PReferences'

// 3. for style
import styled from 'styled-components'
import Close from '@material-ui/icons/Close'

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
      url: 'https://www.framer.com/support/using-framer-x/live-data/',
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
      <PPrototype
        videoSrc="https://vimeo.com/415208247"
        title={
          <h1>
            01/ <br />
            Tilt to Scroll
          </h1>
        }
        desc="Scroll interaction by tilting a device. Especially good for night-time reading "
        links={[
          {
            linkSrc: 'https://01oddproject.netlify.com/',
            linkTitle: 'Try by yourself'
          },
          {
            linkSrc: '',
            linkTitle: 'Project File'
          }
        ]}
      />
      <PDivider />

      <PPrototype
        videoSrc="https://vimeo.com/415208441"
        title={
          <h1>
            02/ <br />
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
            linkSrc: '',
            linkTitle: 'Project File'
          }
        ]}
      />
      <PIframe url="https://02oddproject.netlify.com/" title="" desc="" />
      <PDivider />

      <PPrototype
        videoSrc="https://vimeo.com/417935428"
        title={
          <h1>
            03/ <br />
            Fake-fold
          </h1>
        }
        desc="Find two smartphone to build cutting-edge foldable phone. The cheapest foldable display in the market :)"
        links={[
          {
            linkSrc: '',
            linkTitle: 'Project File'
          }
        ]}
      />
      <PDivider />

      <PPrototype
        videoSrc="https://vimeo.com/415421283"
        title={
          <h1>
            04/ <br />
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
      <PDivider />
      <PPrototype
        videoSrc="https://vimeo.com/417905262"
        title={
          <h1>
            05/ <br />
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
            linkSrc: '',
            linkTitle: 'Project File'
          }
        ]}
      />
      <PIframe url="https://05oddproject.netlify.com/" title="" desc="" />
      <PDivider />

      <PPrototype
        videoSrc="https://vimeo.com/417937671"
        title={
          <h1>
            06/ <br />
            Wireless game controller
          </h1>
        }
        desc="Using deviceorientation value from the mobile to control the position and rotation of the camera in Aframe environment. Aframe.io + socket.io"
        links={[]}
      />
      <PDivider />

      <PPrototype
        videoSrc="https://vimeo.com/415208599"
        title={
          <h1>
            08/ <br />
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
      <PIframe url="https://08oddproject.netlify.com/" title="" desc="" />
      <PDivider />

      <PIframe
        url="https://09oddproject.netlify.com/"
        title=" 09/ Nintendo Rhythm Heaven"
        desc="Nintendo Rhythm Heaven's pen interaction. Tap and stay, or flick!"
        links={[
          {
            linkSrc: 'https://09oddproject.netlify.com/',
            linkTitle: 'Try by yourself'
          },
          {
            linkSrc: '',
            linkTitle: 'Project File'
          }
        ]}
      />

      <PDivider />

      <PPrototype
        videoSrc="https://vimeo.com/415208537"
        title={
          <h1>
            10/ <br />
            Joystick
          </h1>
        }
        desc="Another game controller with"
        links={[
          {
            linkSrc: 'https://10oddproject.netlify.com/',
            linkTitle: 'Try by yourself'
          },
          {
            linkSrc: '',
            linkTitle: 'Project File'
          }
        ]}
      />

      <PIframe url="https://10oddproject.netlify.com/" title="" desc="" />
      <PDivider />
      <PPrototype
        videoSrc="https://vimeo.com/417949198"
        title={
          <h1>
            11/ <br />
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
      <PIframe url="https://11oddproject.netlify.com/" title="" desc="" />

      <PDivider />
      <PPrototype
        videoSrc="https://vimeo.com/431521272"
        title={
          <h1>
            12/ <br />
            Pair phones
          </h1>
        }
        desc="The problem with the some prototypes above is that they cannot be shared. They're connected to same socket so when someone access to one side of the prototypes, they cannot work as they should be. So this component is to pair two mobiles with the random code as their rooms. "
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

      <PDivider />
      <PPrototype
        videoSrc="https://vimeo.com/431521800"
        title={
          <h1>
            13/ <br />
            Flipbook
          </h1>
        }
        desc="As a study for the foldable phone ux with the fake-fold, I tweaked the fake-fold into a e-book interaction. "
        links={[]}
      />

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
