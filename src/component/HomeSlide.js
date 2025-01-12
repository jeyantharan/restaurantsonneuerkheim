import React, { useState, useEffect } from "react";

const HomeSlide = () => {
  return (
    <div className="relative w-full h-96 md:h-screen animate-fadeIn">
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-75 space-y-4">
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold font-home animate-zoomIn">
          WILLKOMMEN AN ALLE{" "}
        </h1>
        <h1 className="animate-zoomIn">
          <span className="text-yellow-500 font-bold text-3xl md:text-7xl">
            Restaurant{" "}
          </span>
          <span className="text-red-600 font-thin text-2xl md:text-5xl font-serif">
            SonneUerkheim
          </span>
        </h1>
        <br />
        <button className="text-white border rounded-full font-bold p-4 hover:text-black hover:bg-white hover:border-black animate-bounce">
          Jetzt Buchen{" "}
        </button>
      </div>

      <img
        src="https://res.cloudinary.com/jeyanth/image/upload/v1716918522/5_x7xkj8.jpg"
        alt="Restaurant"
        className="w-full h-96 md:h-full object-cover mt-6 animate-fadeIn"
      />
    </div>
  );
};

export default HomeSlide;
