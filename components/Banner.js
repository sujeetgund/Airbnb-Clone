import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] xl:h-[500px] 2xl:h-[540px]'>
        <Image 
        src={'/banner.webp'}
        layout='fill'
        objectFit='cover'
        />
        <div className='absolute top-1/2 w-full text-center'>
            <p className='text-sm sm:text-lg lg:text-xl xl:text-2xl'>Not sure where to go? Perfect.</p>
            <button className='text-purple-500 bg-white px-10 py-4 rounded-full shadow-md font-bold my-3 hover:shadow-xl active:scale-90 transition-transform duration-150'>I&apos;m flexible</button>
        </div>
    </div>
  )
}

export default Banner