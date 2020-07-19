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
  const [hoverCategory, setHoverCategory] = React.useState('')
  var featuredColor = '#EE5F4E'
  var interColor = '#2FC4DB'
  var visColor = '#BEB826'
  var idColor = '#2678BE'

  const handleHover = event => {
    if (event.target.id === 'featured') {
      setHoverCategory('featured')
    } else if (event.target.id === 'interactives') {
      setHoverCategory('interactives')
    } else if (event.target.id === 'id') {
      setHoverCategory('id')
    } else if (event.target.id === 'visual') {
      setHoverCategory('visual')
    }
    // console.log(
    //   'event target: ',
    //   event.target,
    //   ' / ',
    //   'event target id: ',
    //   event.target.id
    // )
    // console.log(event.target.id)
    setCurrentMenu(event.target.id)
  }
  const handleMouseOut = event => {
    // console.log('mouse out from:', event.target.id)
    setCurrentMenu(null)
    setHoverCategory(null)
  }
  return (
    <div>
      <Logo hide={0} />
      <StyledWorks>
        <Tags
          onMouseOverCapture={handleHover}
          onMouseOut={handleMouseOut}
          featuredColor={featuredColor}
          interColor={interColor}
          visColor={visColor}
          idColor={idColor}
        >
          <a id="featured">featured</a>
          <a id="interactives">interactives</a>
          <a id="id">industrial</a>
          <a id="visual">visual direction</a>
        </Tags>
        <StyledProjects>
          <h3>projects /</h3>
          <div className="projectTitle">
            {WORKLIST.map(item => {
              const { title, type, link, imgSrc, year, category } = item
              return (
                <WorksTitle
                  key={title}
                  type={type}
                  title={title}
                  link={link}
                  imgSrc={imgSrc}
                  year={year}
                  category={category}
                  setCurrentMenu={setCurrentMenu}
                  currentMenu={currentMenu}
                  setHoverCategory={setHoverCategory}
                  hoverCategory={hoverCategory}
                />
              )
            })}
          </div>
        </StyledProjects>
        <StyledExperiments>
          <h3>experiments /</h3>
          <div className="projectTitle">
            {EXPERIMENTLIST.map(item => {
              const { title, type, link, imgSrc, year, category } = item
              return (
                <WorksTitle
                  className="cards-style"
                  key={title}
                  type={type}
                  title={title}
                  link={link}
                  imgSrc={imgSrc}
                  year={year}
                  category={category}
                  setCurrentMenu={setCurrentMenu}
                  currentMenu={currentMenu}
                  setCategory={setHoverCategory}
                  hoverCategory={hoverCategory}
                />
              )
            })}
          </div>
        </StyledExperiments>
      </StyledWorks>
    </div>
  )
}
const Tags = styled.div`
  top: 19.5vh;
  font-size: 0.8em;
  position: absolute;
  left: 3vw;
  /* display: none; */
  a {
    text-align: left;
    margin-right: 2vw;
    font-size: 0.9em;
    font-weight: 600;
  }
  #featured {
    color: ${props => props.featuredColor};
    border-bottom: 1px solid ${props => props.featuredColor};
  }
  #id {
    color: ${props => props.idColor};
    border-bottom: 1px solid ${props => props.idColor};
  }
  #visual {
    color: ${props => props.visColor};
    border-bottom: 1px solid ${props => props.visColor};
  }
  #interactives {
    color: ${props => props.interColor};
    border-bottom: 1px solid ${props => props.interColor};
  }
`
const StyledWorks = styled.div`
  width: 97vw;
  height: 100vh;
  padding-top: 30vh;
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
