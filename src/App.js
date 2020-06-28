import React from 'react'
import logo from './logo.svg'
import { Main, Works, Profile, Photolog, Contact } from './screens'
import { p01, p02, p03, p04, p05, p06 } from './screens/project'
import { e01, e02, e03, e04, e05 } from './screens/expmnt'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import { HashRouter } from 'react-router-dom'
import { hotjar } from 'react-hotjar'

function App() {
  hotjar.initialize(460400, 6)

  // const imagemin = require('imagemin')
  // const imageminWebp = require('imagemin-webp')

  // imagemin(['images/*.{jpg,png}'], {
  //   //input here
  //   destination: './img' + '/images/converted/', //output here
  //   plugins: [
  //     imageminWebp({
  //       quality: 100 //quality
  //     })
  //   ]
  // }).then(() => {
  //   console.log('Images optimized')
  // })
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Layout>
        <Route exact path="/" component={Main} />
        <Route path="/works" component={Works} />
        <Route path="/profile" component={Profile} />
        <Route path="/photolog" component={Photolog} />
        <Route path="/contact" component={Contact} />
        <Route path="/project/idly" component={p01} />
        <Route path="/project/campfire" component={p02} />
        <Route path="/project/wonderland" component={p03} />
        <Route path="/project/superhappy" component={p05} />
        <Route path="/project/paragraph" component={p04} />
        <Route path="/project/nofie" component={p06} />

        <Route path="/expmnt/odd" component={e01} />
        <Route path="/expmnt/faceband" component={e02} />
        <Route path="/expmnt/ptor" component={e03} />
        <Route path="/expmnt/website" component={e04} />
        <Route path="/expmnt/unified" component={e05} />
      </Layout>
    </HashRouter>
  )
}

export default App
