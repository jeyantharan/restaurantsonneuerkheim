// src/component/NewsList.js
import React from 'react';
import NewsItem from './NewsItem';
//import defaultImage from 'https://res.cloudinary.com/jeyanth/image/upload/v1717014402/news-1028791_960_720-ezgif.com-webp-to-jpg-converter_mccyel.jpg'; // Ensure you have a default image in your assets

const newsData = [
  {
    title: 'News Title 1',
    description: 'This is a short description of news item 1.This is a short description of news item 1This is a short description of news item 1This is a short description of news item 1',
    imageUrl: 'https://res.cloudinary.com/jeyanth/image/upload/v1717014402/news-1028791_960_720-ezgif.com-webp-to-jpg-converter_mccyel.jpg',
    link: '/news/1'
  },
  {
    title: 'News Title 2',
    description: 'This is a short description of news item 2.',
    imageUrl: 'https://res.cloudinary.com/jeyanth/image/upload/v1717014402/news-1028791_960_720-ezgif.com-webp-to-jpg-converter_mccyel.jpg',
    link: '/news/2'
  },
  {
    title: 'News Title 2',
    description: 'This is a short description of news item 2.',
    imageUrl: 'https://res.cloudinary.com/jeyanth/image/upload/v1717014402/news-1028791_960_720-ezgif.com-webp-to-jpg-converter_mccyel.jpg',
    link: '/news/2'
  },
  {
    title: 'News Title 2',
    description: 'This is a short description of news item 2.',
    imageUrl: 'https://res.cloudinary.com/jeyanth/image/upload/v1717014402/news-1028791_960_720-ezgif.com-webp-to-jpg-converter_mccyel.jpg',
    link: '/news/2'
  },
  {
    title: 'News Title 2',
    description: 'This is a short description of news item 2.',
    imageUrl: 'https://res.cloudinary.com/jeyanth/image/upload/v1717014402/news-1028791_960_720-ezgif.com-webp-to-jpg-converter_mccyel.jpg',
    link: '/news/2'
  },
  // Add more news items here
];

const NewsList = () => {
  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-wrap justify-center">
        {newsData.map((news, index) => (
          <NewsItem 
            key={index} 
            title={news.title} 
            description={news.description} 
            imageUrl={news.imageUrl} 
            // defaultImage={defaultImage}
            link={news.link}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsList;
