import Image from 'next/image'
import React from 'react'
import {GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon} from '@heroicons/react/solid'

const Header = () => {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-4 md:px-10'>
        {/* left */}
        <div className='relative flex items-center h-10 my-auto cursor-pointer'>
            <Image
             src={'/airbnb.png'}
             layout='fill'
             objectFit='contain'
             objectPosition='left'   
            />
        </div>


        {/* middle */}
        <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
        <input className='pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder:text-gray-400' type="text" placeholder='Start your search' />
        <SearchIcon className='h-8 hidden md:inline-flex bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
        </div>

        {/* right */}
        <div className='flex justify-end space-x-4 items-center text-gray-500'>
        <p className='hidden md:inline cursor-pointer'>Become a host</p>
        <GlobeAltIcon className='h-6 hover:animate-spin cursor-pointer' />
        <div className='flex items-center border p-2 rounded-full space-x-2'>
            <MenuIcon className='h-6' />
            <UserCircleIcon className='h-6' />
        </div>
        </div>
    </header>
  )
}

export default Header