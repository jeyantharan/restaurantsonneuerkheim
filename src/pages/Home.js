import React from 'react'
import HomeSlide from "../component/HomeSlide";
import KnowUs from "../component/KnowUs";
import Slide from "../component/Slide";
import Story from "../component/Story";

function Home() {
  return (
    <div>
       <HomeSlide />
      <KnowUs/>
      <Slide />
      <Story/>
    </div>
  )
}

export default Home
