import React from 'react'
import videoBg from '../../Assets/Video/video1.mp4'
import "./header.style.scss"


function HomeHeader() {
  return (
    <>
    <div>
    <video id="myVideo" autoPlay loop muted src={videoBg}/>
    </div>
    </>
  )
}

export default HomeHeader