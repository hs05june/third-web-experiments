import React from 'react'
import { loader } from '../assets'

const Loader = () => {
  return (
    <div className='fixed inset-0 z-10 h-screen bg-[rgba(0,0,0,0.7)] flex items-center justify-center '>
        <img src={loader} alt="loader" className='w-[100px] h-[100px] object-contain ' />
        <p className='mt-[20px] font-bold text-[20px] text-center  '>Transaction is in progress Please wait....</p>
    </div>
  )
}

export default Loader