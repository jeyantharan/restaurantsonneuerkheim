// src/pages/Gallery.js
import React, { useState } from 'react';

const photos = [
  'https://res.cloudinary.com/jeyanth/image/upload/v1717007050/3719ec9f-0f0b-46f6-b554-5b83f01782a21-ezgif.com-crop_mgppjl.jpg',
  'https://res.cloudinary.com/jeyanth/image/upload/v1716918522/5_x7xkj8.jpg',
  'https://res.cloudinary.com/jeyanth/image/upload/v1717007050/3719ec9f-0f0b-46f6-b554-5b83f01782a21-ezgif.com-crop_mgppjl.jpg',
  'https://res.cloudinary.com/jeyanth/image/upload/v1717007050/3719ec9f-0f0b-46f6-b554-5b83f01782a21-ezgif.com-crop_mgppjl.jpg',
  'https://res.cloudinary.com/jeyanth/image/upload/v1717007050/3719ec9f-0f0b-46f6-b554-5b83f01782a21-ezgif.com-crop_mgppjl.jpg',
  'https://res.cloudinary.com/jeyanth/image/upload/v1717007050/3719ec9f-0f0b-46f6-b554-5b83f01782a21-ezgif.com-crop_mgppjl.jpg',
  'https://res.cloudinary.com/jeyanth/image/upload/v1717007050/3719ec9f-0f0b-46f6-b554-5b83f01782a21-ezgif.com-crop_mgppjl.jpg',
  'https://res.cloudinary.com/jeyanth/image/upload/v1716918522/5_x7xkj8.jpg',
  'https://res.cloudinary.com/jeyanth/image/upload/v1717007050/3719ec9f-0f0b-46f6-b554-5b83f01782a21-ezgif.com-crop_mgppjl.jpg',
  'https://res.cloudinary.com/jeyanth/image/upload/v1717007050/3719ec9f-0f0b-46f6-b554-5b83f01782a21-ezgif.com-crop_mgppjl.jpg',
  'https://res.cloudinary.com/jeyanth/image/upload/v1717007050/3719ec9f-0f0b-46f6-b554-5b83f01782a21-ezgif.com-crop_mgppjl.jpg',
  'https://res.cloudinary.com/jeyanth/image/upload/v1717007050/3719ec9f-0f0b-46f6-b554-5b83f01782a21-ezgif.com-crop_mgppjl.jpg',
  'https://res.cloudinary.com/jeyanth/image/upload/v1717007050/3719ec9f-0f0b-46f6-b554-5b83f01782a21-ezgif.com-crop_mgppjl.jpg',
  'https://res.cloudinary.com/jeyanth/image/upload/v1716918522/5_x7xkj8.jpg',
  'https://res.cloudinary.com/jeyanth/image/upload/v1717007050/3719ec9f-0f0b-46f6-b554-5b83f01782a21-ezgif.com-crop_mgppjl.jpg',
  'https://res.cloudinary.com/jeyanth/image/upload/v1717007050/3719ec9f-0f0b-46f6-b554-5b83f01782a21-ezgif.com-crop_mgppjl.jpg',
  'https://res.cloudinary.com/jeyanth/image/upload/v1717007050/3719ec9f-0f0b-46f6-b554-5b83f01782a21-ezgif.com-crop_mgppjl.jpg',
  'https://res.cloudinary.com/jeyanth/image/upload/v1717007050/3719ec9f-0f0b-46f6-b554-5b83f01782a21-ezgif.com-crop_mgppjl.jpg',
  'https://res.cloudinary.com/jeyanth/image/upload/v1717007050/3719ec9f-0f0b-46f6-b554-5b83f01782a21-ezgif.com-crop_mgppjl.jpg',
  'https://res.cloudinary.com/jeyanth/image/upload/v1716918522/5_x7xkj8.jpg',
  'https://res.cloudinary.com/jeyanth/image/upload/v1717007050/3719ec9f-0f0b-46f6-b554-5b83f01782a21-ezgif.com-crop_mgppjl.jpg',
  'https://res.cloudinary.com/jeyanth/image/upload/v1717007050/3719ec9f-0f0b-46f6-b554-5b83f01782a21-ezgif.com-crop_mgppjl.jpg',
  'https://res.cloudinary.com/jeyanth/image/upload/v1717007050/3719ec9f-0f0b-46f6-b554-5b83f01782a21-ezgif.com-crop_mgppjl.jpg',
  'https://res.cloudinary.com/jeyanth/image/upload/v1717007050/3719ec9f-0f0b-46f6-b554-5b83f01782a21-ezgif.com-crop_mgppjl.jpg',
];

const defaultImage = 'https://via.placeholder.com/300?text=Default+Image';

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const imagesPerPage = 9;
  const totalPages = Math.ceil(photos.length / imagesPerPage);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc || defaultImage);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * imagesPerPage;
  const selectedImages = photos.slice(startIndex, startIndex + imagesPerPage);

  return (
    <div className=" mt-16">
      <div className="relative flex items-center justify-center">
        <hr className="absolute left-0 w-full border-t border-gray-500" />
        <h1 className="relative z-10 px-4 bg-black text-white text-3xl md:text-5xl font-bold text-center md:w-72 p-4 pr-5 pl-5 rounded-full md:pt-3 md:pb-3 md:pr-14 md:pl-14">Gallery</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 mt-5 md:mt-20">
        {selectedImages.map((photo, index) => (
          <div key={index} className="relative group">
            <img
              src={photo}
              alt={`Photo ${index + 1}`}
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => openModal(photo)}
            />
            <div onClick={() => openModal(photo)} className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
              <span className="text-white text-lg">View Image</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={handlePrevPage}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-white p-4 rounded"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-0 right-0 m-2 text-black"
              onClick={closeModal}
            >
              &times;
            </button>
            <img src={selectedImage} alt="Selected" className="max-w-full max-h-screen p-8" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
