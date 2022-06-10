import { HeartIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React from 'react'

const InfoCards = ({img, location, title, price, description, star, total}) => {
  return (
    <div className='flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg pr-4 transition duration-200 ease-out first:border-t'>
        <div className="relative h-24 w-40 md:h-52 md:w-80">
            <Image src={img} layout='fill' objectFit='cover' className='rounded-2xl' />
        </div>

        <div className='flex flex-col flex-grow pl-5'>
            <div className='flex justify-between'>
            <p>{location}</p>
            <HeartIcon className='h-7 cursor-pointer' />
            </div>
            <div className="text-xl">{title}</div>
            <div className='border-b w-14 pt-2' />
            <p className='text-sm pt-2 text-gray-500 flex-grow'>{description}</p>
            <div className='flex justify-between items-end pt-5'>
                <p className='flex items-center'>
                <StarIcon className='h-5 text-red-500' />
                {star}
                </p>
                <div>
                    <p className='text-lg lg:text-2xl pb-2 font-semibold'>{price}</p>
                    <p className='text-right font-extralight'>{total}</p>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default InfoCards