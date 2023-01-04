import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi'; // Have to put the two beginning letters of icon imprt after the react-icons

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav)
    if(!nav) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'scroll'
    }
  };

  return (
    <div class='absolute w-full flex justify-between p-4 items-center'>
      <h1 class='text-white font-bold text-2xl z-20'> Experiences</h1>
      <HiMenuAlt3 onClick={handleNav} class='z-20 text-white cursor-pointer' size={25} />
      <div class={nav ? 'fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10 ease-in duration-300' : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'}>
        <ul class='flex flex-col fixed w-full h-full items-center justify-center'>
          <li class='font-bold text-3xl p-8'>Destinations</li>
          <li class='font-bold text-3xl p-8'>Home</li>
          <li class='font-bold text-3xl p-8'>Reservations</li>
          <li class='font-bold text-3xl p-8'>Amenities</li>
          <li class='font-bold text-3xl p-8'>Rooms</li>
        </ul>
      </div>

    </div>
  )
}

export default NavBar