import React from 'react'
import { computer } from '../assets'

const Loading = () => {
  return (
    <div className=' relative h-[100%] flex justify-center items-center mt-12 ' >
      <img src={computer} className='animate-bounce opacity-50 '  width={200} height={200} alt="computer" />
    </div>
  )
}

export default Loading
