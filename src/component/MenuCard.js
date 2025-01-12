// src/component/MenuCard.js
import React from "react";
import "./MenuCard.css"; // Import CSS file for animations

const MenuCard = ({ title, description, imageUrl, pdfUrl }) => {
  const handleViewPdf = () => {
    if (pdfUrl) {
      window.open(pdfUrl, "_blank");
    } else {
      alert("No content to show.");
    }
  };

  return (
    <div className="menu-card animate-slideIn">
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <button
          onClick={handleViewPdf}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          Menü Ansicht{" "}
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
