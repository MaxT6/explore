import React from 'react'
import background from "../images/maldives-huts.jpg"

const Hero = () => {
  return (
    <div class='w-full h-screen'>
      <img class='top-0 left-0 w-full h-screen object-cover' src={background} alt="brown huts on water"/>
      <div class='bg-black/30 absolute top-0 left-0 w-full h-screen'/>
      <div class='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div class='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
          <p>All Inclusive</p>
          <h1 class='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Private Beaches & Getaways</h1>
          <p class='max-w-[600px] drop-shadow-2xl py-2 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vitae beatae magni blanditiis totam doloribus similique excepturi perspiciatis eum recusandae.
          </p>
          <button class='bg-white text-black'>Reserve Now</button>
        </div>
      </div>
    </div>
  )
}

export default Hero

