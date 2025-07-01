import FadeInWhenVisible from '../app/componets/FadeInWhenVisible';
import React from 'react'
import Featured from './Pages/HomePage/Featured'
import Shopex from './Pages/HomePage/shopex'
import Topcategory from './Pages/HomePage/topcategory'
import Question from './Pages/HomePage/Question'
import HeroSection from './Pages/HomePage/HeroSection';

export default function page() {
  return (
    <main className="bg-[#f7f7f0] space-y-20">
      <FadeInWhenVisible><HeroSection/></FadeInWhenVisible>
      <FadeInWhenVisible><Featured /></FadeInWhenVisible>
      <FadeInWhenVisible><Topcategory /></FadeInWhenVisible>
      <FadeInWhenVisible><Shopex /></FadeInWhenVisible>
      <FadeInWhenVisible><Question /></FadeInWhenVisible>
    </main>
  )
}

