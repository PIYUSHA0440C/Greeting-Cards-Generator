import React from 'react'
import { useState } from 'react'
import Card from './components/Card'


const App = () => {


  const [name, setName] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [greetMsg, setGreetMsg] = useState('')
  const [event, setEvent] = useState('')


  const localData = JSON.parse(localStorage.getItem('all-cards')) || []

  const [allCards, setAllCards] = useState(localData)


  // Contact Creation Handler
  const submitHandler = (e) => {
    e.preventDefault()
    const oldCards = [...allCards]
    oldCards.push({ name, imageURL, greetMsg, event })

    setAllCards(oldCards)
    localStorage.setItem('all-cards', JSON.stringify(oldCards));

    setName('')
    setImageURL('')
    setGreetMsg('')
    setEvent('')
  }

  const deleteHandler = (idx) => {

    const copyCards = [...allCards]
    copyCards.splice(idx, 1)
    setAllCards(copyCards)
    localStorage.setItem('all-cards', JSON.stringify(copyCards))

  }

  const [exampleCardData, setExampleCardData] = useState([{
    name: " example name",
    event: "example",
    imageURL: "https://images.unsplash.com/vector-1759830830346-e803029851b4?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    greetMsg: "Happy birthday to the most beautiful person inside and out, This is an example card"
  }])

  const deleteHandlerExample = () => {
    setExampleCardData([])
  }

//   if(JSON.parse(localStorage.getItem('all-cards')).length === 0){
//     localStorage.setItem('all-cards', JSON.stringify([{
//     name: " Dear name",
//     event: "Birthday",
//     imageURL: "https://images.unsplash.com/vector-1759830830346-e803029851b4?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     greetMsg: "Happy birthday to the most beautiful person inside and out"
//   }]))
// }


  return (
    <div className='min-h-screen p-5 '>
      <h1 className='text-center text-4xl font-bold p-5  bg-linear-to-r from-blue-600 to-emerald-600 bg-clip-text bg- text-transparent lg:text-6xl'>Greeting Cards Generator</h1>

      <form onSubmit={(e) => submitHandler(e)} className='max-w-4xl mx-auto flex flex-wrap flex-col item-center p-6 bg-white rounded-xl border border-gray-200 shadow-md '>

        <h2 className='text-center text-2xl font-semibold text-gray-700 mb-4'>Add New Contact</h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <input className='border border-gray-300 text-lg font-semibold px-4 py-2 rounded-lg focus:ring focus:ring-blue-400 hover:ring hover:ring-blue-400 outline-none m-2 transition-all capitalize'
            placeholder='Enter The Name' required
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }} />

          <input className='border border-gray-300 text-lg font-semibold px-4 py-2 rounded-lg focus:ring focus:ring-blue-400 hover:ring hover:ring-blue-400 outline-none m-2 transition-all capitalize'
            placeholder='Enter The Event (Eg. Birthday, New Year)' required
            value={event}
            onChange={(e) => {
              setEvent(e.target.value)
            }} />

          <input className='border border-gray-300 text-lg font-semibold px-4 py-2 rounded-lg focus:ring focus:ring-blue-400 hover:ring hover:ring-blue-400 outline-none m-2 transition-all'
            type="text" name="" id="" required
            placeholder='Enter Banner Image URL'
            value={imageURL}
            onChange={(e) => {
              setImageURL(e.target.value)
            }} />

          <input className='border border-gray-300 text-lg font-semibold px-4 py-2 rounded-lg focus:ring focus:ring-blue-400 hover:ring hover:ring-blue-400 outline-none m-2 transition-all'
            type="text" name="" id="" required maxLength='40'
            placeholder='Enter Greeting Text (max 50 characters)'
            value={greetMsg}
            onChange={(e) => {
              setGreetMsg(e.target.value)
            }} />
        </div>

        <button className='mt-6 px-6 py-3 active:scale-95 cursor-pointer m-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-transform outline-none'>Generate Card</button>

      </form>

      <div className='max-w-6xl mx-auto py-12 flex flex-wrap justify-center gap-6'>
        <h1 className='w-full text-center text-2xl font-semibold text-gray-700 mb-4'>
          Cards List
        </h1>

        {allCards.length > 0 ? (
          allCards.map((elem, idx) => (
            <Card cardData={elem} deleteHandler={deleteHandler} idx={idx} />
          )
          )) : ((exampleCardData.length == 0) ? (<p className='text-gray-400 text-lg italic'>No Greeting Cards Generated yet...</p>) : (
            exampleCardData.map((elem, idx) => 
              <Card cardData={elem} deleteHandler={deleteHandlerExample} idx={idx}/>
            ))
        )
        }
      </div>

    </div>
  )
}

export default App
