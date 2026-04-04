import Card from './components/Card'
import name from './images/Mudassar.jpg'
import img2 from './images/2.png' 
import { useState } from 'react'
function App() { 
  let [color,setColor] = useState("olive")
  return (
    <>
    <div className='w-full h-screen'
    style={{backgroundColor:color}}>
       <div className='flex bg-yellow-100 md:w-200 rounded-3xl h-8 p-1 gap-4 pl-5'>
            <button onClick={()=>{setColor("red")}} className='bg-red-700 w-20 rounded-3xl hover:bg-red-600'>Red</button>
            <button onClick={()=>{setColor("green")}} className='bg-green-700 w-20 rounded-3xl hover:bg-green-600'>Green</button>
            <button onClick={()=>{setColor("blue")}} className='bg-blue-700 w-20 rounded-3xl hover:bg-blue-600'>Blue</button>
            <button onClick={()=>{setColor("yellow")}} className='bg-yellow-500 w-20 rounded-3xl hover:bg-yellow-400'>Yellow</button>
            <button onClick={()=>{setColor("black")}} className='bg-black w-20 rounded-3xl text-white hover:bg-slate-800'>Black</button>
            <button onClick={()=>{setColor("white")}} className='bg-white w-20 rounded-3xl hover:bg-olive-200'>White</button>
            <button onClick={()=>{setColor("violet")}} className='bg-violet-700 w-20 rounded-3xl hover:bg-violet-500'>violate</button>
        </div> 
      <Card name="sarah smith" src={img2}/>
      <Card name="Mudassar" src={name}/>
      </div>
    </>
  )
}

export default App
