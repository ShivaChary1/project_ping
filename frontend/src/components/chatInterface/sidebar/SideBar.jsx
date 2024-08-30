import React from 'react'
import './sidebar.css'
import logo from '../../../assets/logo_Ping.svg'

const SideBar = () => {
  return (
    <div className='w-60 h-screen sidebar'>
      <div>
        <img src={logo} alt="ping logo(img not found)" />
      </div>
    </div>
  )
}

export default SideBar
