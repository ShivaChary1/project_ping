import React from 'react'
import Navbar from './navbar/Navbar'
import './home.css'
import Hero from './hero/Hero'
import Second from './second_section/Second'
import ThirdSection from './third_section/ThirdSection'

const Home = () => {
  return (
    <>
    <div className='h-screen home_page'>
      <Navbar />
      <Hero />
      <Second/>
      <ThirdSection/>
    </div>
    </>
  )
}

export default Home
