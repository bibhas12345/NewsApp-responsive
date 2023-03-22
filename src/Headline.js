import React from 'react'
import { BsFillRecordFill } from 'react-icons/bs';

export default function Headline() {
  return (
    <div>
      <div className='w-full p-8 flex bg-gradient-to-r from-red-500 via-rose-200 to-red-500  justify-center items-center mt-11 py-20'>
        <h2 className='text-black font-bold text-3xl'><span className='text-4xl text-red-600'>N</span>ews<span className='text-4xl text-red-600 font-bold'>24</span></h2>
        < BsFillRecordFill  className='ml-2 shadow-sm shadow-gray-400 rounded-full text-3xl text-red-800 mt-1 animate-ping'/>
      </div>
    </div>
  )
}
