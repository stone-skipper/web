import React from 'react'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
// 1. Dependencies
// 2. Components
// 3. for style
import styled from 'styled-components'
import WorksTitle from '../components/WorksTitle'
import Logo from '../components/Logo'
import WORKLIST from '../screens/work-list.json'
import EXPERIMENTLIST from '../screens/experiment-list.json'
// import { currentMenu, setCurrentMenu } from '../components/WorksTitle'

// 4. Static Resources

//——*——*——*——*——*——//

const Works = () => {
  const [currentMenu, setCurrentMenu] = React.useState(null)
  return (
    <div>
      <Logo hide={0} />
      <StyledWorks>
        <StyledProjects>
          <h3>projects /</h3>
          <div className="projectTitle">
            {WORKLIST.map(item => {
              const { title, type, link, imgSrc, year } = item
              return (
                <WorksTitle
                  key={title}
                  type={type}
                  title={title}
                  link={link}
                  imgSrc={imgSrc}
                  year={year}
                  setCurrentMenu={setCurrentMenu}
                  currentMenu={currentMenu}
                />
              )
            })}
          </div>
        </StyledProjects>
        <StyledExperiments>
          <h3>experiments /</h3>
          <div className="projectTitle">
            {EXPERIMENTLIST.map(item => {
              const { title, type, link, imgSrc, year } = item
              return (
                <WorksTitle
                  className="cards-style"
                  key={title}
                  type={type}
                  title={title}
                  link={link}
                  imgSrc={imgSrc}
                  year={year}
                  setCurrentMenu={setCurrentMenu}
                  currentMenu={currentMenu}
                />
              )
            })}
          </div>
        </StyledExperiments>
      </StyledWorks>
    </div>
  )
}

const StyledWorks = styled.div`
  width: 97vw;
  height: 100vh;
  padding-top: 28vh;
  margin-left: 3vw;
  overflow-x: scroll;
  display: grid;
  color: white;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 4.5vw;

  @media (max-width: 1024px) {
    display: block;
    overflow-x: hidden;
    overflow-y: hidden;
    height: 220vh;
  }
  h3 {
    font-size: 0.7em;
    opacity: 0.2;
    position: absolute;
    margin-top: -8.5vh;

    @media (max-width: 1024px) {
      opacity: 1;
    }
  }
`
const StyledProjects = styled.div`
  height: 58vh;
  width: 78vw;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 5vh;
  float: left;
  position: relative;

  @media (max-width: 1024px) {
    width: 94vw;
    height: 80vh;
    margin-bottom: 10vh;
  }

  .projectTitle {
    position: absolute;

    /* background: red; */

    display: grid;
    grid-template-columns: repeat(2, 40vw);
    grid-template-rows: repeat(4, 9vh);

    grid-column-gap: 0;
    grid-row-gap: 5vh;
    grid-auto-flow: column;

    float: left;
    margin-right: 10vw;

    @media (max-width: 1024px) {
      height: max-content;
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(20, 1fr);
      grid-row-gap: 3vh;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
  }
`

const StyledExperiments = styled.div`
  height: 58vh;
  width: 78vw;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 5vh;
  float: left;
  position: relative;

  @media (max-width: 1024px) {
    width: 94vw;
    height: 70vh;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }

  .projectTitle {
    position: absolute;

    /* background: red; */

    display: grid;
    grid-template-columns: repeat(2, 40vw);
    grid-template-rows: repeat(4, 9vh);
    grid-column-gap: 0;
    grid-row-gap: 5vh;
    float: left;
    margin-right: 10vw;
    grid-auto-flow: column;

    @media (max-width: 1024px) {
      height: max-content;
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(20, 1fr);
      grid-row-gap: 3vh;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
  }
`

export default Works
