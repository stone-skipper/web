import React from 'react'
import Lottie from 'lottie-react-web'
import animation from '../img/stone-skipping.json'

const LottieControl = () => (
  <Lottie
    style={{
      // backgroundColor: 'red',
      borderBottom: '1px solid rgba(256,256,256,0.2)'
    }}
    options={{
      animationData: animation
    }}
  />
)

export default LottieControl
