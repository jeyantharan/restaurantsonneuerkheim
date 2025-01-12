import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const images = [
    'https://res.cloudinary.com/jeyanth/image/upload/v1716924827/pexels-chanwalrus-958545_ymq6an.jpg',
    'https://res.cloudinary.com/jeyanth/image/upload/v1716924829/pexels-ella-olsson-572949-1640772_xfvfw6.jpg',
    'https://res.cloudinary.com/jeyanth/image/upload/v1716924829/pexels-dana-tentis-118658-262959_v9m50y.jpg',
  ];

function Slide() {

    const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    }, 2500); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="w-full md:justify-between md:flex md:pr-20 md:pl-20 mb-12 mt-16">
    <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} className=" md:h-72 w-9/12 md:w-1/4 rounded-lg shadow-lg mx-auto md:mx-0" />
    <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} className=" md:h-72 w-9/12 md:w-1/4 rounded-lg shadow-lg mx-auto md:mx-0 mt-4 md:mt-0" />
    <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} className=" md:h-72  w-9/12 md:w-1/4 rounded-lg shadow-lg mx-auto md:mx-0 mt-4 md:mt-0" />

  </div>
  <div className='flex justify-center'>
  <button className=" text-2xl  w-3/6 mt-1 mb-6 md:mb-0 md:mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
  <Link to='/galerie'>Alle Anzeigen</Link>
</button>
  </div>
  </>
  )
}

export default Slide
