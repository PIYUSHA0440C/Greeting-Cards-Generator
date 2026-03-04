import React from 'react'
import Upper from './Upper'
import Lower from './Lower'

const Card = ({ cardData, deleteHandler, idx }) => {


  return (
    <div className='card w-95 rounded-xl overflow-hidden bg-white'>
      <Upper imageURL={cardData.imageURL} />
      <Lower cardData={cardData} deleteHandler={deleteHandler} idx={idx} />
      
    </div>
  )
}

export default Card
