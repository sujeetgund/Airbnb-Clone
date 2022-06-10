import Image from 'next/image'
import React, { useState } from 'react'
import {useRouter} from 'next/router'
import {GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon, UserIcon, UsersIcon} from '@heroicons/react/solid'

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';


const Header = ({placeholder}) => {
  const [searchInput, setsearchInput] = useState("");
  const [startDate, setstartDate] = useState(new Date())
  const [endDate, setendDate] = useState(new Date())
  const [noOfGuests, setnoOfGuests] = useState(1)
  const router = useRouter()

  
  const handleSelect =(ranges) => {
    setstartDate(ranges.selection.startDate)
    setendDate(ranges.selection.endDate)
  }

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection"
  }
  const resetInput = () => {
    setsearchInput("")
  }

  const search =() => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests
      }
    })
  }
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-4 md:px-10'>
        {/* left */}
        <div className='relative flex items-center h-10 my-auto cursor-pointer'>
            <Image
            onClick={() => router.push("/")}
             src={'/airbnb.png'}
             layout='fill'
             objectFit='contain'
             objectPosition='left'   
            />
        </div>


        {/* middle */}
        <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
        <input value={searchInput} onChange={
          (e) => setsearchInput(e.target.value)
        } className='pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder:text-gray-400' type="text"
         placeholder={placeholder || 'Start your search'} />
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
        {searchInput && (
        <div className='flex flex-col col-span-3 mx-auto'>
          <DateRangePicker ranges={[selectionRange]}
          minDate={new Date()}
          rangeColors={["#FD5861"]}
          onChange={handleSelect}
          />
          <div className='flex items-center border-b mb-4'>
            <h2 className='text-xl flex-grow font-semibold'>Number Of Guests</h2>
            <UsersIcon className='h-5' />
            <input type="number" value={noOfGuests} onChange={(e) => setnoOfGuests(e.target.value)} min="1" className='w-12 pl-2 text-red-400 outline-none text-lg' />
          </div>

          <div className='flex space-x-2'>
            <button onClick={resetInput} className='flex-grow text-gray-400 cursor-pointer py-1 border-2 rounded-md'>Cancel</button>
            <button onClick={search} className='flex-grow text-white bg-red-400 cursor-pointer rounded-md py-1'>Search</button>
            </div>
          </div>  
          )}

    </header>
  )
}

export default Header