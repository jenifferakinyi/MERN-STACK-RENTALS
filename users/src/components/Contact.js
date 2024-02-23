import { StarIcon } from '@heroicons/react/solid';
import React from 'react';
import { LocationMarkerIcon } from '@heroicons/react/solid';
import { MailIcon, PhoneIcon } from '@heroicons/react/solid';


const Contact = () =>{
  return( 
    //contact details
      <div className="contact-container text-center pt-10 ">
  <h1 className='text-bold text-4xl text-orange-600 font-roboto font-medium slide-in-left'>CONTACT US</h1>
  <div className="flex items-center justify-center">
  <hr className="w-1/4 md:w-40 h-px my-0 bg-orange-600 border-0 dark:bg-orange-600 slide-in-right" />
  <envelopes-bulk/>
  <StarIcon className="h-8 w-8 text-orange-600 slide-in-left" />
  <hr className="w-1/4 md:w-40 h-px my-0 bg-orange-600 border-0 dark:bg-orange-600 slide-in-right" />
</div>
<p className="font-roboto font-medium text-center text-gray-500">Sign up to access all features and get updates of newly listed rentals and selling properties</p><br/><br/>
<br/>
<div className="">
<div className="flex flex-col justify-center   md:flex-row">
  <div className="w-full md:w-1/4 px-2 mb-4 md:mb-0 min-h-72 ">
    <div className="bg-gray-100   mt-0"style={{ borderRadius: "10px" }}>
      <MailIcon className="text-orange-600 w-8 h-8 mb-3 ml-4 "/> 
      <h1 className="mr-36 font-roboto font-medium ">SEND US AN EMAIL</h1>
      <h4 className="mr-56 mt-3 font-roboto font-medium text-gray-500">Email via:</h4>
      <p className="mr-16 font-roboto font-medium text-gray-500">info@homemallhousetolet.com</p>
      <hr className="w-20 h-1 my-0 bg-orange-600 border-0 dark:bg-orange-600 ml-5 mt-5" />
      <p className="mt-4 mr-52 text-orange-600 font-roboto font-medium">Contact Us</p>
    </div>
  </div>
  <div className="w-full md:w-1/4 px-2 mb-4 md:mb-0">
    <div className="bg-gray-50 "style={{ borderRadius: "10px" }}>
    <PhoneIcon className="text-orange-600 w-8 h-8 mb-3 ml-4 "/> 
      <h1 className="mr-56 font-roboto font-medium ">CALL US</h1>
      <h4 className="mr-32 mt-3 font-roboto font-medium text-gray-500">We are available 24/7</h4>
      <p className="mr-16 font-roboto font-medium text-gray-500">0745 189 540 | 0721 655 324</p>
      <hr className="w-20 h-1 my-0 bg-orange-600 border-0 dark:bg-orange-600 ml-6 mt-5" />
      <p className="mt-4 mr-48 text-orange-600 font-roboto font-medium">Contact Us</p>
    </div>
  </div>
  <div className="w-full md:w-1/4 px-2">
    <div className="bg-gray-50 " style={{ borderRadius: "10px" }}>
    <LocationMarkerIcon className="text-orange-600 w-8 h-8 mb-3 ml-4 "/> 
      <h1 className="mr-44 font-roboto font-medium ">OUR LOCATIONS</h1>
      <h4 className="mr-60 mt-3 font-roboto font-medium text-gray-500">Visit Us:</h4>
      <p className="mr-14 font-roboto font-medium text-gray-500">Kitengela Mall,off-namanga road</p>
      <hr className="w-20 h-1 my-0 bg-orange-600 border-0 dark:bg-orange-600 ml-11 md:ml-5 mt-5" />
      <p className="mt-4 mr-52 text-orange-600 font-roboto font-medium">Contact Us</p>
    </div>
  </div>
</div>
</div>
</div>

          
  )
}
export default Contact;