import React from 'react'
import Navbar from './navbar/Navbar'
import './home.css'
import Hero from './hero/Hero'

const Home = () => {
  return (
    <>
    <div className='h-screen home_page'>
      <Navbar />
      <Hero />
    </div>
    </>
  )
}

export default Home
