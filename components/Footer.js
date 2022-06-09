import React from 'react'

const Footer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 place-items-center bg-gray-100 text-gray-600'>
        <div className='space-y-4 text-gray-800 text-xs '>
            <h5 className='font-bold'>ABOUT</h5>
            <p>How Airbnb Works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
        </div>

        <div className='space-y-4 text-gray-800 text-xs'>
            <h5 className='font-bold'>COMMUNITIES</h5>
            <p>Accessibility</p>
            <p>This is not a real site</p>
            <p>Its a pretty awesome clone</p>
            <p>Referrals accepted</p>
            <p>New Ideas</p>
        </div>

       <div className='space-y-4 text-gray-800 text-xs'>
            <h5 className='font-bold'>HOST</h5>
            <p>God Coderzz Admin</p>
            <p>Presents</p>
            <p>New Shelter Programme</p>
            <p>For all the voluteers</p>
            <p>Join Now</p>
        </div>

        <div className='space-y-4 text-gray-800 text-xs'>
            <h5 className='font-bold'>SUPPORT</h5>
            <p>Help Centre</p>
            <p>Trust and Safety</p>
            <p>Say Hi to us</p>
            <p>Easter Egg</p>
            <p>For the fun</p>
        </div>

        
    </div>
  )
}

export default Footer