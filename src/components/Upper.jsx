import React from 'react'

const Upper = ({imageURL}) => {
  return (
    <div className='upper w-full h-fit'>
        <img className='h-full w-full object-cover object-center' src={imageURL} alt="" />
    </div>
  )
}

export default Upper
