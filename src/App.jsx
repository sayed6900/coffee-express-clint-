
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard'
import { useState } from 'react'

function App() {
  
  const coffees = useLoaderData()
  const [newCoffee,setNewCoffee]= useState(coffees)

  return (
    <>
      
      <h1 className='text-2xl font-bold text-red-800'>Cold & Hot Coffee : {coffees.length} </h1>
      <div className='grid md:grid-cols-2 gap-4'>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} 
          newCoffee={newCoffee} 
          setNewCoffee={setNewCoffee}
          coffee={coffee} ></CoffeeCard> )
        }
      </div>
    </>
  )
}

export default App
