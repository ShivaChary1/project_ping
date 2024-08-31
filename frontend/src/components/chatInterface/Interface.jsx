import React from 'react'
import SideBar from './sidebar/SideBar'
import Chats from './chatsdisplay/Chats'
import Messages from './messaging/Messages'

function Interface() {
  return (
    <div className='w-screen flex flex-row items-center' >
      <SideBar/>
      <Chats/>
      <Messages/>
    </div>
  )
}

export default Interface
