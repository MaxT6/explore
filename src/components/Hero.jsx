import React from 'react'
import background from "../images/maldives-huts.jpg"

const Hero = () => {
  return (
    <div class='w-full h-screen'>
      <img class='top-0 left-0 w-full h-screen object-cover' src={background} alt="brown huts on water"/>
      <div class='bg-black/30 absolute top-0 left-0 w-full h-screen'/>
    </div>
  )
}

export default Hero

