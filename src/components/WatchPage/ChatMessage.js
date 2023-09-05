import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center w-full border h-auto'>
         <img
        className="w-8 h-8 m-1"
        src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
        alt="person icon"
      />

      <div className='flex'>
      <span className='font-semibold px-1'>{name}</span>
      <span>{message}</span>
      </div>
      
  
    </div>
  )
}

export default ChatMessage