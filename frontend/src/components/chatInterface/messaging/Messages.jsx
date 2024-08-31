import React from 'react'
import './messages.css'
import SendButton from './msg_utils/SendButton'

const Messages = () => {
  return (
    <div className='h-screen messages flex flex-col items-center '>
      
      <div className="chat_who"></div>

      <div className='all_texts'></div>

      <div className='send_msg'> 
        <SendButton/>
      </div>
    </div>
  )
}

export default Messages
