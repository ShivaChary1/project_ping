import React from 'react'
import Navbar from './navbar/Navbar'
import './home.css'
import Hero from './hero/Hero'
import Second from './second_section/Second'

const Home = () => {
  return (
    <>
    <div className='h-screen home_page'>
      <Navbar />
      <Hero />
      <Second/>
    </div>
    </>
  )
}

export default Home
