// src/pages/Menu.js
import React from 'react';
import MenuCard from '../component/MenuCard';

const menuItems = [
  {
    title: 'A la Carte',
    description: 'Frisch zubereitet.',
    imageUrl: 'https://res.cloudinary.com/jeyanth/image/upload/v1717065068/8fe6e20b-19fe-4cca-b930-88d3e04bb3f3-ezgif.com-webp-to-jpg-converter_bajawu.jpg',
    pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/restaurant-53596.appspot.com/o/Neue%20Speissekarte.pdf%2005.04.24.pdf?alt=media&token=dcbe8309-3be3-4751-9021-bff4f887b1e2'
  },
  {
    title: 'Getränke',
    description: 'Voller Geschmack.',
    imageUrl: 'https://res.cloudinary.com/jeyanth/image/upload/v1717066525/original_g6emqn.jpg',
    pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/restaurant-53596.appspot.com/o/Neue%20Getra%CC%88nkekarte.pdf?alt=media&token=d1db97ac-1f15-4f41-8eda-c3ca829b59a1'
  },
  {
    title: 'Vorspeisen',
    description: 'Köstliche Appetitanreger.',
    imageUrl: 'https://res.cloudinary.com/jeyanth/image/upload/v1717067119/b9f20a43-39a2-4ad2-965d-b346d5adabdc-ezgif.com-webp-to-jpg-converter_l9gl8b.jpg',
    pdfUrl: ''
  },
  {
    title: 'Hauptgerichte',
    description: 'Volle Vitaminhaltige Gerichte.',
    imageUrl: 'https://res.cloudinary.com/jeyanth/image/upload/v1717067308/70c4632f-f1f7-494f-888b-b56bbec79e74-ezgif.com-webp-to-jpg-converter_soz32k.jpg',
    pdfUrl: ''
  },
  {
    title: 'Dessert',
    description: 'Der krönende Abschluss einer Mahlzeit.',
    imageUrl: 'https://res.cloudinary.com/jeyanth/image/upload/v1717067885/alexandra-khudyntseva-hXqbSgOPjSI-unsplash_vhtj3r.jpg',
    pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/restaurant-53596.appspot.com/o/Glace.pdf?alt=media&token=2d2b8e8a-f254-45b1-93b6-cc1a1ebea744'
  }
];

const Menu = () => {
  return (
    <div className="mt-16">
      <div className="relative flex items-center justify-center">
        <hr className="absolute left-0 w-full border-t border-gray-500" />
        <h1 className="relative z-10 px-4 bg-black text-white text-3xl md:text-5xl font-bold text-center md:w-72 p-4 pr-5 pl-5 rounded-full md:pt-3 md:pb-3 md:pr-14 md:pl-14">Menü</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 mt-5 md:mt-20">
        {menuItems.map((item, index) => (
          <MenuCard
            key={index}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            pdfUrl={item.pdfUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
