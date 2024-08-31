import React from 'react'
import './chats.css'

function Chats() {
  return (
    <div className='h-screen chats w-96 flex flex-col items-center'>
      <div className='text-7xl text-left pl-3.5 w-96 mt-6'>All Chats</div>
      <div className="rule h-0 mt-3.5"></div>

      <div className="search mt-4">
        <input className='search_chats h-8 pl-3.5 rounded-lg text-xs' placeholder='Search your chats' type="text" name="Search" id="search_chats" />
      </div>

      <div>
        
      </div>

    </div>
  )
}

export default Chats
