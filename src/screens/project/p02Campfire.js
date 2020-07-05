import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// 1. Dependencies
// 2. Components
import PCover from '../../components/PCover'
import PResearch from '../../components/PResearch'
import PConcept from '../../components/PConcept'
import PInsightLR from '../../components/PInsightLR'
import PDetail from '../../components/PDetail'
import PGif from '../../components/PGif'
import PVideo from '../../components/PVideo'
import POverview from '../../components/POverview'
import PProcess from '../../components/PProcess'
import POutro from '../../components/POutro'
import PSlideshow from '../../components/PSlideshow'

// 3. for style
import styled from 'styled-components'
import Close from '@material-ui/icons/Close'
import LazyLoad from 'react-lazy-load'

// 4. Static Resources

//——*——*——*——*——*——//

const p02Campfire = () => {
  var research_odd = [
    { imgSrc: 'p02_rsc01', desc: 'recording studio in WeWork' },
    { imgSrc: 'p02_rsc02', desc: 'Facebook Austin' },
    { imgSrc: 'p02_rsc03', desc: 'Workbar Coworking space' },
    { imgSrc: 'p02_rsc04', desc: 'Capital Factory Meetup' },
    { imgSrc: 'p02_rsc05', desc: 'WeWork Austin Domain' },
    { imgSrc: 'p02_rsc06', desc: 'Essential Design' },
    { imgSrc: 'p02_rsc07', desc: 'Fitness Studio' },
    { imgSrc: 'p02_rsc08', desc: 'Capital Factory' },
    { imgSrc: 'p02_rsc09', desc: 'Facebook Austin' }
  ]
  var sketches = [
    { imgSrc: 'p02_sk0' },
    { imgSrc: 'p02_sk00' },
    { imgSrc: 'p02_sk000' },
    { imgSrc: 'p02_sk0000' },
    { imgSrc: 'p02_sk01' },
    { imgSrc: 'p02_sk02' },
    { imgSrc: 'p02_sk03' },
    { imgSrc: 'p02_sk04' },
    { imgSrc: 'p02_sk05' },
    { imgSrc: 'p02_sk06' },
    { imgSrc: 'p02_sk07' },
    { imgSrc: 'p02_sk08' },
    { imgSrc: 'p02_sk09' },
    { imgSrc: 'p02_sk10' },
    { imgSrc: 'p02_sk11' },
    { imgSrc: 'p02_sk12' },
    { imgSrc: 'p02_sk13' },
    { imgSrc: 'p02_sk14' }
  ]
  var insightImgs = [
    {
      imgSrc: 'p02_img04',
      number: '01',
      title: 'Individuals carrying their environment',
      desc:
        "Individuals pursue flexibility, but don't want to compromise the quality of environment and their productivity."
    },
    {
      imgSrc: 'p02_img05',
      number: '02',
      title: 'Peers and contributors from online communities',
      desc:
        "As people work by themselves, there's no one you can go talk to for questions and feedbacks. But instead, they share works and opinions online, and this becomes a source of learning and inspiration."
    },
    {
      imgSrc: 'p02_img06',
      number: '03',
      title: 'Work and communicate spontaneously',
      desc:
        'Meetings are becoming more than communication. People do research and work while discussing or enven testing and proving in a limited time, like in hack-a-thons and sprints.'
    }
  ]

  var research_even = [
    { imgSrc: 'p02_rsc10', desc: 'Design Within Reach Consultant' },
    { imgSrc: 'p02_rsc11', desc: 'Jade, Devocion NY' },
    { imgSrc: 'p02_rsc12', desc: 'WeWork New Member Orientation' },
    { imgSrc: 'p02_rsc13', desc: 'Ace Hotel NY' },
    { imgSrc: 'p02_rsc14', desc: 'Four Seasons NY Concierge' },
    { imgSrc: 'p02_rsc15', desc: 'Seyi, Individual movie director' },
    { imgSrc: 'p02_rsc16', desc: 'A/D/O NY Designers Community' },
    { imgSrc: 'p02_rsc01', desc: 'recording studio in WeWork' },
    { imgSrc: 'p02_rsc02', desc: 'Facebook Austin' },
    { imgSrc: 'p02_rsc03', desc: 'Workbar Coworking space' },
    { imgSrc: 'p02_rsc04', desc: 'Capital Factory Meetup' },
    { imgSrc: 'p02_rsc05', desc: 'WeWork Austin Domain' }
  ]
  var sect1 = [
    {
      imgSrc: 'p02_img11',
      detailTitle: 'Individuals, carrying their environment',
      detailDesc:
        'People work all individually anywhere, using a device that can pull up an environment they want on the physical surroundings.'
    },
    {
      imgSrc: 'p02_img10',
      detailTitle: 'Find people for instant collaboration',
      detailDesc:
        'Connect you to people who can develop your work, based on the status of your work'
    },
    {
      imgSrc: 'p02_img12',
      detailTitle: 'Set the environment for collaboration',
      detailDesc:
        'Control the range of environment and utilize accordingly for collaboration'
    }
  ]
  var sect2 = [
    {
      imgSrc: 'p02_img13',
      detailTitle: 'Conversations to actions',
      detailDesc:
        'Conversations are identified and pulled as an interactive touchpoints of information and tools'
    },
    {
      imgSrc: 'p02_img14',
      detailTitle: 'Bring personal work style',
      detailDesc:
        'Work with personal tools and interfaces when working in a shared Campfire environment'
    },
    {
      imgSrc: 'p02_img17',
      detailTitle: 'Fluent flow of remote collaboration',
      detailDesc:
        'Make realtime connections between you and a remote teammate to share information and the status'
    }
  ]
  var sect3 = [
    {
      imgSrc: 'p02_img15',
      detailTitle: 'Spread embers to expand insight',
      detailDesc:
        'Reach out to people who can provide meaningful perspectives. Contributors can easily participate by experiencing the content and discussing with people around them.'
    },
    {
      imgSrc: 'p02_img16',
      detailTitle: 'Open collaboration anywhere',
      detailDesc:
        'The boundary of collaboration will be expanded from team to everyone with more appropriate expertise and chances of instant meet-up.'
    }
  ]
  var processImg = [
    {
      imgSrc: 'p02_pr01',
      desc: 'interviews & visits'
    },
    {
      imgSrc: 'p02_pr02',
      desc: 'interviews & visits'
    },
    {
      imgSrc: 'p02_pr06',
      desc: 'insight mapping'
    },
    {
      imgSrc: 'p02_pr12',
      desc: 'ideation & concept building'
    },
    {
      imgSrc: 'p02_pr04',
      desc: 'key experience strategy'
    },
    {
      imgSrc: 'p02_pr07',
      desc: 'storyboarding'
    },
    {
      imgSrc: 'p02_pr13',
      desc: 'storyboarding'
    },
    {
      imgSrc: 'p02_pr08',
      desc: '3d prototyping'
    },
    {
      imgSrc: 'p02_pr05',
      desc: 'asset building'
    },

    {
      imgSrc: 'p02_pr09',
      desc: 'scene visualization'
    },
    { imgSrc: 'profile-img11', desc: 'presentation to group leaders' }
  ]
  var projectIcons = [
    {
      imgSrc: 'p02_icon01'
    }
  ]

  return (
    <Styledp02Campfire>
      <Link to="/works">
        <Close className="closeButton" />
      </Link>
      <LazyLoad height="100vh" offset={100} once>
        <PCover
          title="campfire"
          desc="future collaboration environment & experiences"
          type="future UX scenario"
          year="2018"
          detail="personal project"
          imgSrc="p02_thumb"
          icons={projectIcons}
        />
      </LazyLoad>
      <POverview
        question={
          <p>
            “Works are getting flexible, but what about
            <span>collaboration?”</span>
          </p>
        }
      />
      <LazyLoad height="120vh" offset={100} once>
        <PResearch
          imgs_odd={research_odd}
          imgs_even={research_even}
          title="Every place is someone's workplace"
          desc="I visited 31 workplaces from typical corporation offices to someone's apartments, exploring what is driving changes in the way we work"
        />
      </LazyLoad>
      <LazyLoad height="130vh" offset={100} once>
        <PInsightLR
          imgs={insightImgs}
          title="How are we changing"
          desc="The purpose of the on-site exploration was to find out the direction of changes, and what's driving it."
        />
      </LazyLoad>
      <LazyLoad height="120vh" offset={100} once>
        <PConcept
          imgSrc="p02_img03"
          concept={<h1>flexible and efficient collaboration experience</h1>}
          user="future gig workers"
          desc="We face lots of people working in cafes or coworking
offices. Those people who sit next to me can be a great
developer who can give me an advice, or potential
interviewer with meaningful story."
          txtColor="white"
        />
      </LazyLoad>
      <LazyLoad height="110vh" offset={100} once>
        <PGif
          imgSrc="p02_img08"
          title="A platform to find instant collaborators"
          desc="Finding right collaborators becomes reliable and instant,
connecting your needs and people's detailed expertise"
        />
      </LazyLoad>
      <LazyLoad height="110vh" offset={100} once>
        <PGif
          imgSrc="p02_img07"
          title="Environment for the efficient collaboration"
          desc="Open up an intelligent environment,
that provides appropriate assistance based on the context"
        />
      </LazyLoad>
      <LazyLoad height="110vh" offset={100} once>
        <PGif
          imgSrc="p02_img09"
          title="Collect contributions from other perspectives"
          desc="Spread your work to people with meaningful perspectives
and their conversations turns into information by the environment"
        />
      </LazyLoad>
      <PVideo videoSrc="https://youtu.be/HibwELn2Uy8?list=PL2l5e0Djn3__gf717mGVRm4QUgo9mCfM0" />
      <LazyLoad height="280vh" offset={100} once>
        <PDetail
          sectTitle={
            <span>
              01/
              <br />
              setting
              <br />a campfire
            </span>
          }
          sectDesc="Open an environment for collaboration,
and connect with people around you for an instant cooperation"
          imgs={sect1}
          bgColor="rgba(255,255,255,0.1)"
        />
      </LazyLoad>
      <LazyLoad height="290vh" offset={100} once>
        <PDetail
          sectTitle={
            <span>
              02/
              <br />
              around
              <br />
              the campfire
            </span>
          }
          sectDesc="The intelligent environment understands the context of the discussion,
and provide a right assistance, both for on-site and remote collaborators"
          imgs={sect2}
          bgColor="rgba(255,255,255,0.1)"
        />
      </LazyLoad>
      <LazyLoad height="220vh" offset={100} once>
        <PDetail
          sectTitle={
            <span>
              03/
              <br />
              spreading
              <br />
              embers
            </span>
          }
          sectDesc="Spread your work to potential contributors, and make them talk.
The Campfire environment collect their natural conversations as an insightful data."
          imgs={sect3}
          bgColor="rgba(255,255,255,0.1)"
        />
      </LazyLoad>
      <LazyLoad height="100vh" offset={100} once>
        <PSlideshow
          imgs={sketches}
          title=""
          dur={800}
          trdr={0}
          desc="Communication with quick drawings was very effective in sharing ideas and planning the storyline."
        />
      </LazyLoad>
      <LazyLoad height="70vh" offset={100} once>
        <PProcess imgs={processImg} />
      </LazyLoad>
      <POutro
        line1="Personal project for an internship in Dell Experience Design Group, 2018, 9 months"
        line2={
          <plaintext>
            For the future experience design project, I chose the topic '
            collaboration' by myself. <br />
            With this project I wanted to provide insights on the projects in
            the company and work devices on collaboration aspect. <br />
            The project was supported and mentored by the Dell Advanced Design
            Team, and shared with executives and other teams for insights.
          </plaintext>
        }
      />
    </Styledp02Campfire>
  )
}

const Styledp02Campfire = styled.div`
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

export default p02Campfire
