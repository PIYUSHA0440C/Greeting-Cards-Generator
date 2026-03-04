import React from 'react'

const Lower = ({cardData, deleteHandler, idx}) => {
  return (
    <div className='lower font-semibold px-5 py-3 flex flex-col items-center text-center gap-2'>
        <h2 className='text-[45px] font-bold text-[#1e2939]'>Happy {cardData.event}</h2>
        <h4 className='text-[#2b7fff] bg-[#eff6ff] px-4 py-2 rounded-full'>Dear, {cardData.name}</h4>
        <h3 className='w-full text-orange-600 bg-[#f3f4f6] px-3 py-2 rounded-lg'>{cardData.greetMsg}</h3>
        <button onClick={() => {
        deleteHandler(idx)
      }} className='w-full mt-1 px-6 py-2.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-600 hover:text-white font-bold text-xs uppercase tracking-wider transition-colors duration-200 cursor-pointer active:scale-95 outline-none'>
        Remove
      </button>
    </div>
  )
}

export default Lower
