import React from 'react'
import './sidebar.css'
import logo from '../../../assets/logo_Ping.svg'
import { IoAddCircleOutline, IoLogOutOutline } from "react-icons/io5";

const SideBar = () => {
  return (
    <div className='w-60 h-screen sidebar flex flex-col justify-between'>
      <div className='h-min justify-center items-center flex flex-col'> 
        <div className='mt-3.5'>
          <img className='h-20 w-60' src={logo} alt="ping logo(img not found)"/>
        </div>

        <div className='text-white mt-10'>
            <button className="add_people bg-white my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out hover:scale-100 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#007bff] before:to-[rgb(0,123,255)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
            <IoAddCircleOutline className='w-5 h-5 mr-1'/>Add new people
            </button>
        </div>

        <div className='mt-8 w-full text-center'>
          <button className='w-full h-10 text-md text-gray-700 active_section'>
            All Chats
          </button>
          <button className='w-full h-10 text-md text-gray-700'>
            Groups
          </button>
          <button className='w-full h-10 text-md text-gray-700'>
            Favorites
          </button>
        </div>
      </div>

      <div className='mb-8 flex flex-col items-center'>
        <button className='w-full h-10 text-md text-gray-700 flex items-center justify-center'>
          <IoLogOutOutline className='w-5 h-5 text-gray-700 mr-2'/>
          logout
        </button>
        <div className='h-12 w-12 bg-black rounded-full mt-6'></div>
      </div>
    </div>
  )
}

export default SideBar
