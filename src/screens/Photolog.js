import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// 1. Dependencies
import PHOTOLIST from '../screens/photo-list.json'
import { Lazyload } from 'react-lazyload'

// 2. Components
import Logo from '../components/Logo'
import PhotoItem from '../components/PhotoItem'

// 3. for style
import styled from 'styled-components'

// 4. Static Resources

//——*——*——*——*——*——//

const Photolog = () => {
  const [Ptitle, setTitle] = React.useState('')
  const [Pplace, setPlace] = React.useState('')
  const [Pdata, setData] = React.useState('18/18-03')
  const [clicked, setClicked] = React.useState(false)
  const [modalOpen, setModalOpen] = React.useState('none')
  return (
    <StyledPhotolog>
      <Logo hide={0} />

      <PhotoGridWrapper>
        <NavInsta>
          <a
            href="https://www.instagram.com/_ss_mm_ll/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram @_ss_mm_ll
          </a>
        </NavInsta>
        <PhotoGrid>
          {PHOTOLIST.map(item => {
            const { title, data, place, year } = item
            return (
              <PhotoItem
                className="flex"
                key={data}
                year={year}
                title={title}
                place={place}
                data={data}
                Ptitle={Ptitle}
                Pplace={Pplace}
                Pdata={Pdata}
                clicked={clicked}
                modalOpen={modalOpen}
                setTitle={setTitle}
                setPlace={setPlace}
                setData={setData}
                setClicked={setClicked}
                setModalOpen={setModalOpen}
              />
            )
          })}
        </PhotoGrid>
      </PhotoGridWrapper>
      <PopupBg>
        <div id="popup">
          <div className="pop-img">
            <img src="" title="" alt="" id="photo" />
          </div>
          <div id="text-tag">
            <span className="title" />
            <span className="place" />
          </div>
          <div className="pop-details" />
          <div id="close" />
        </div>
      </PopupBg>
    </StyledPhotolog>
  )
}

const StyledPhotolog = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`

const NavInsta = styled.div`
  color: white;
  font-size: 0.7em;
  text-align: right;
  margin-bottom: 1vh;
  opacity: 0.5;
`
const PhotoGridWrapper = styled.div`
  margin-top: 20vh;
  width: 94vw;
  margin-left: 3vw;
  margin-bottom: 20vh;
`
const PhotoGrid = styled.div`
  width: 100%;
  object-fit: cover;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 0.3vw;
  grid-column-gap: 0.3vw;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
const PopupBg = styled.div`
  display: none;
  overflow: hidden;
`

export default Photolog
