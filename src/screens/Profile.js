import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// 1. Dependencies
// 2. Components
import Logo from '../components/Logo'
import ExpCard from '../components/ExpCard'
import EXPLIST from '../screens/experience-list.json'

// 3. for style
import styled from 'styled-components'
import LottieControl from '../components/LottieControl'

// 4. Static Resources

//——*——*——*——*——*——//

const Profile = () => {
  var imgnum = EXPLIST.length
  return (
    <StyledProfile>
      <Logo />

      <DivAnim>
        <LottieControl />
      </DivAnim>

      <DivIntro>
        <p>
          I define the role of an experience designer as a&nbsp;
          <span style={{ fontWeight: 600 }}>stone-skipper</span>. I come up with
          new experiences for the day after tomorrow, and visualize them to
          share with people. <br />
          <br />
          Design for me, therefore, is to looking further ahead and skipping a
          stone, causing waves and impacts for more thoughts and eventually,
          realization.
        </p>
        <p>
          I am from an industrial design background, interested in converging
          different mediums in new technologies. I'm an experimenter by myself,
          implementing 3d prototyping and digital prototypes to test and deliver
          my ideas. I pursue my career in experiences of tangible products and
          spaces.
        </p>
      </DivIntro>
      <DivInterSkill>
        <h2>Interest & skills</h2>
        <SecInterest>
          <div className="imgGroup">
            <img src={require('../img/profile-01-b.jpg')} alt="" />

            <img src={require('../img/profile-01.jpg')} alt="" />
            <h2>
              Bridge digital experiences <br />
              with <span>tangible</span> mediums{' '}
            </h2>
            <p>
              Adapt industrial design tools <br />
              and processes
              <br />
              <br />
              Rhinoceros / Keyshot / 3d printing
            </p>
          </div>
          <div className="imgGroup">
            <img src={require('../img/profile-02-b.jpg')} alt="" />

            <img src={require('../img/profile-02.jpg')} alt="" />
            <h2>
              Create a <span>story</span> to convey <br />
              new visions and concepts
            </h2>
            <p>
              Communicate through
              <br />
              video and illustrations
              <br />
              <br />
              After Effects / Illustrator / Photoshop / Procreate drawing
            </p>
          </div>
          <div className="imgGroup">
            <img src={require('../img/profile-03-b.jpg')} alt="" />

            <img src={require('../img/profile-03.jpg')} alt="" />

            <h2>
              <span>Visualize</span> new experiences <br />
              beyond the horizon
            </h2>
            <p>
              Prototype and visualize
              <br />
              visionary experiences
              <br />
              <br />
              Cinema4D / Framer X / HTML / CSS
            </p>
          </div>
        </SecInterest>
      </DivInterSkill>
      <DivExp>
        <h2>Experiences</h2>
        <ScrollCover>
          <ScrollContent imgnum={imgnum}>
            {EXPLIST.map(item => {
              const { year, imgSrc, title, desc } = item
              return (
                <ExpCard
                  className="expCard"
                  key={title}
                  year={year}
                  title={title}
                  desc={desc}
                  imgSrc={imgSrc}
                />
              )
            })}
          </ScrollContent>
        </ScrollCover>
      </DivExp>
      <a href="/" className="resume" target="_blank" rel="noopener noreferrer">
        Resume / CV
      </a>
    </StyledProfile>
  )
}

const StyledProfile = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding-top: 10vh;
  display: grid;
  grid-template-rows: 1fr;
  grid-row-gap: 10vh;
  grid-row-start: 0;
  justify-items: center;
  align-items: top;
  @media (max-width: 1024px) {
    overflow-x: hidden;
  }

  & .resume {
    color: white;
    position: fixed;
    text-align: center;
    right: -0.8em;
    top: 50vh;
    font-size: 0.8em;
    padding-bottom: 0.8em;
    font-weight: 600;
    border-bottom: 2px solid white;
    transform: translate(-50%, -50%) rotate(-90deg);
    z-index: 10;
    transition: 0.4s;
    @media (max-width: 1024px) {
      position: static;
      transform: none;
      margin-bottom: 20vh;
    }
  }

  & .resume:hover {
    transform: translate(-50%, -50%) rotate(0deg);
  }
`

const DivIntro = styled.div`
  width: 97vw;
  height: max-content;
  /* background-color: red; */
  margin-left: 3vw;
  color: white;
  margin-bottom: 15vh;
  @media (max-width: 1024px) {
    width: 90vw;
  }

  & p {
    width: 35vw;
    font-size: 1em;
    float: left;
    margin-right: 10vw;
    @media (max-width: 1024px) {
      width: 90vw;
    }
  }
`
const DivAnim = styled.div`
  width: 100vw;
  height: max-content;
  @media (max-width: 1024px) {
    height: 50vh;
  }
`
const DivExp = styled.div`
  width: 97vw;
  height: 55vh;
  margin-left: 3vw;
  margin-bottom: 30vh;
  overflow-x: scroll;
  overflow-y: hidden;
  color: white;
  border-top: 1px solid rgba(256, 256, 256, 0.2);
  & > h2 {
    font-size: 0.8em;
    padding-top: 0.8em;
  }
  @media (max-width: 1024px) {
    height: 70vh;
    margin-bottom: 10vh;
  }
`
const ScrollCover = styled.div`
  height: 90vh;
`
const ScrollContent = styled.div`
  width: calc((15vw + 2vw) * ${props => props.imgnum} + 3vw);
  height: 70vh;
  @media (max-width: 1024px) {
    width: calc((80vw + 1vw) * ${props => props.imgnum} + 3vw);
    height: 70vh;
  }

  & > :last-child {
    margin-right: 3vw;
  }
`

const DivInterSkill = styled.div`
  width: 97vw;
  height: max-content;

  margin-left: 3vw;
  margin-bottom: 15vh;
  color: white;
  border-top: 1px solid rgba(256, 256, 256, 0.2);
  @media (max-width: 1024px) {
    width: 90vw;
  }
  & > h2 {
    font-size: 0.8em;
    padding-top: 0.8em;
  }
`
const SecInterest = styled.div`
  width: 97vw;
  margin-top: 10vh;
  height: max-content;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 1024px) {
    grid-template-columns: none;
    display: block;
  }
  & > div {
    position: relative;
  }
  & img {
    width: 15vw;
    @media (max-width: 1024px) {
      width: 80vw;
    }
  }
  & img:nth-of-type(2n-1) {
  }
  & img:nth-of-type(2n) {
    /* opacity: 0.5; */
    position: absolute;
    left: 0;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  & img:nth-of-type(2n):hover {
    animation: none;
  }
  & h2 {
    font-size: 1.5em;
    color: rgba(256, 256, 256, 0.6);
    margin-top: 2vh;
    font-weight: 300;
    line-height: 1.5;
  }
  & p {
    font-size: 0.6em;
    font-weight: 300;
    opacity: 0.6;
  }

  & h2 span {
    color: rgba(256, 256, 256, 1);
  }
`
export default Profile
