import React from 'react'
import { card3 } from '../assets'

const SucsessOrder = ({message , onclose ,text , className }) => {
  return (
    <div className='  fixed inset-0 flex justify-center   z-10 items-center'>
        <div className= "absolute bg-n-7/90 inset-0 flex justify-center items-center rounded-[1rem]  p-3">
            <div className={`bg-n-1 ${ className || 'animate-bounce'} w-full md:max-w-[50%] lg:max-w-[30%] rounded-[2rem] p-[1rem] text-n-8`}>
            <div className="mb-7 ">
          <h3 className={`h4 ${className || 'text-green-800' } font-bold`}>{message}</h3>
          <p className='body-2 mt-3 text-[1rem] text-n-4 leading-3 '>{text}</p>
          </div>
          <div className="w-full mx-auto ">
          <button onClick={onclose} className={` bg-red-600 mx-auto mt-3 p-2 rounded-[0.70rem] font-code font-bold  text-n-1`}>Close</button>
          </div> 
        </div>
        </div>
    </div>
  )
}

export default SucsessOrder
