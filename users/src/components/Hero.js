import 'typeface-poppins';
import 'typeface-roboto';
import { StarIcon } from '@heroicons/react/solid';
import React, { useEffect, useState } from 'react';



const images = [
    'h1.jpg',
];


const transitionDuration = 5000; // Set the transition duration in milliseconds

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change the interval as needed (in milliseconds)

    return () => clearInterval(interval);
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/${images[currentImageIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Default height for larger screens

    paddingBottom: '56.25%', // 16:9 aspect ratio (9 / 16 * 100%)

    transition: `background-image ${transitionDuration}ms ease-in-out`, // Adjust the transition speed
  };

  return (
    <div className="body-container  " style={backgroundImageStyle}>
<div className="content-container text-center pt-72">
  <h1 className='text-bold text-6xl text-orange-700 font-roboto slide-in-right'>HOMEMALL</h1>
  <h1 className='text-bold text-6xl text-orange-700 font-roboto slide-in-right'>HOUSE TO LET</h1>
  <div className="flex items-center justify-center">
    <hr className="w-1/4 md:w-40 h-px my-0 bg-orange-600 border-0 dark:bg-orange-600 slide-in-right" />
    <StarIcon className="h-8 w-8 text-orange-600 slide-in-left" />
    <hr className="w-1/4 md:w-40 h-px my-0 bg-orange-600 border-0 dark:bg-orange-600 slide-in-right" />
  </div>
  <p className='text-white font-roboto mt-4 slide-in-left text-2xl'>Find Your Perfect Rental</p>
</div>
    </div>
  );
  
};

export default Hero;
