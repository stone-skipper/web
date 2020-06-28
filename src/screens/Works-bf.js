import React from 'react'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
// 1. Dependencies
// 2. Components
// 3. for style
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import styled from 'styled-components'
import WorksCard from '../components/WorksCard'
import Logo from '../components/Logo'
import WORKLIST from '../screens/work-list.json'
import EXPERIMENTLIST from '../screens/experiment-list.json'

// 4. Static Resources

//——*——*——*——*——*——//

const Works = () => {
  return (
    <div>
      <Logo hide={0} />
      <StyledWorks>
        <Tabs
          className="tabs-wrapper"
          defaultIndex={0}
          onSelect={index => console.log(index)}
          selectedTabClassName="tabs-tab-selected"
          selectedTabPanelClassName="tabs-panel-selected"
        >
          <TabList className="tabs-style clearfix">
            <Tab className="tab-style" selectedTabClassName="tab-style-active">
              Projects
            </Tab>
            <Tab className="tab-style" selectedTabClassName="tab-style-active">
              Experiments
            </Tab>
          </TabList>
          <ScrollContent>
            <TabPanel className="projects-style">
              {WORKLIST.map(item => {
                const { title, type, link, imgSrc } = item
                return (
                  <WorksCard
                    className="cards-style"
                    key={title}
                    type={type}
                    title={title}
                    link={link}
                    imgSrc={imgSrc}
                  />
                )
              })}{' '}
            </TabPanel>
          </ScrollContent>
          <ScrollContent>
            <TabPanel className="experiments-style">
              {EXPERIMENTLIST.map(item => {
                const { title, type, link, imgSrc } = item
                return (
                  <WorksCard
                    className="cards-style"
                    key={title}
                    type={type}
                    title={title}
                    link={link}
                    imgSrc={imgSrc}
                  />
                )
              })}{' '}
            </TabPanel>
          </ScrollContent>
        </Tabs>
      </StyledWorks>
    </div>
  )
}

const StyledWorks = styled.div`
  width: 97vw;
  height: 100vh;
  padding-top: 24vh;
  margin-left: 3vw;
  overflow-y: hidden;

  & .tabs-wrapper {
    width: 16vw;
  }
  & .tabs-style {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 0;
  }

  & .tab-style {
    color: white;
    opacity: 0.5;
    transition: 0.4s;
    cursor: pointer;
    float: left;
    padding-right: 2vw;
    font-size: 0.8em;
  }

  & .tabs-tab-selected {
    opacity: 1;
  }

  & .tab-style:hover {
    opacity: 1;
  }

  & .projects-style {
    overflow-x: scroll;
    /* width: calc((15vw + 0.5vw) * 10 + 3vw); */
    width: calc((15vw + 0.5vw) * 8 + 3vw);
  }

  & .experiments-style {
    overflow-x: scroll;

    width: calc((15vw + 0.5vw) * 7 + 3vw);
  }

  & .projects-style .cards-style:last-child {
    padding-right: 3vw;
  }

  & .experiments-style .cards-style:last-child {
    padding-right: 3vw;
  }

  & .tabs-panel-selected {
    animation: fade-in 1000ms;
  }

  /* & .tabs-panel-selected::before {
    animation: fade-out 1000ms;
  } */

  /* & .cards-style {
    animation: expand 1s;
  } */
  @keyframes fade-in {
    from {
      opacity: 0;
      filter: blur(10px);
      -webkit-filter: blur(10px);
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      filter: blur(0);
      -webkit-filter: blur(0);
      transform: translateY(0px);
    }
  }
  @keyframes fade-out {
    from {
      opacity: 1;
      filter: blur(0px);
      -webkit-filter: blur(0px);
    }
    to {
      opacity: 0;
      filter: blur(10px);
      -webkit-filter: blur(10px);
    }
  }
`

const ScrollContent = styled.div`
  /* background-color: orange; */
  overflow-x: scroll;
  width: 97vw;
`

export default Works
