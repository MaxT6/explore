import React from 'react'
import bike from "../images/beach-bike.jpg";
import chairs from "../images/beach-chairs.jpg";
import boats from "../images/boats-water.jpg";
import palms from "../images/palm-trees-right-v.jpg";
import island from "../images/personal-island.jpg";

const Plan = () => {
  return (
    <div class='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
      {/* Left Side */}
      <div class='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img class='row-span-3 object-cover w-full h-full p-2' src={boats} alt='birdseye view of boats in clear water' />
        <img class='row-span-2 object-cover w-full h-full p-2' src={bike} alt='bike on a pier' />
        <img class='row-span-2 object-cover w-full h-full p-2' src={island} alt='a small island with a single hut' />
        <img class='row-span-3 object-cover w-full h-full p-2' src={palms} alt='beach with palm trees bordering the right' />
        <img class='row-span-2 object-cover w-full h-full p-2' src={chairs} alt='chairs on a beach' />
      </div>
      {/* Right Side */}
      <div class='flex flex-col h-full justify-center'>
        <h3 class='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
        <p class='text-2xl py-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, repellat!</p>
        <p class='pb-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus cum corporis optio nemo iste ratione, fugiat tempore omnis architecto aliquid, consequuntur dolore ex voluptas, sunt repudiandae eos impedit harum libero!
        </p>
        <div>
          <button class='border-black mr-4 hover:shadow-xl'>
            Learn More
          </button>
          <button class='bg-black text-white border-black hover:shadow-xl'>
            Book Your Trip
          </button>
        </div>
      </div>
    </div>
  )
}

export default Plan