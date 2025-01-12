// src/component/NewsItem.js
import React, { useState } from 'react';

const NewsItem = ({ title, description, imageUrl, defaultImage, link }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 md:mt-20">
      <img 
        src={imageUrl || defaultImage} 
        alt={title} 
        className="w-full cursor-pointer" 
        onClick={handleImageClick}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
        
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
          <div className="relative">
            <img src={imageUrl || defaultImage} alt={title} className="max-w-full max-h-full" />
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 bg-gray-200 rounded-full p-2"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsItem;
