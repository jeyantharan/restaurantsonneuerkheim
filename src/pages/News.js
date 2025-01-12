// src/pages/News.js
import React from 'react';
import NewsList from '../component/NewsList';

const News = () => {
  return (
    <div className="mt-16">
      <div className="relative flex items-center justify-center">
        <hr className="absolute left-0 w-full border-t border-gray-500" />
        <h1 className="relative z-10 px-4 bg-black text-white text-3xl md:text-5xl font-bold text-center md:w-72 p-4 pr-5 pl-5 rounded-full md:pt-3 md:pb-3 md:pr-14  md:pl-14">News</h1>
      </div>
      <NewsList />
    </div>
  );
};

export default News;
