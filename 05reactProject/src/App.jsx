import { useState } from 'react'
import './App.css'

function App() {
  let[bg,setbg]=useState("black")



  return (
   <>
   <div className='min-h-screen' style={{ backgroundColor:bg}}>
   <div className='bg-amber-50 p-8 m-3 rounded-xl '>
    <button className='m-5 border-3  border-black p-2 rounded-2xl w-18 bg-white text-black font-bold hover:bg-red-600 hover:text-amber-50  shadow-md  shadow-gray-400' onClick={()=>{
      setbg("red")
    }}>RED</button>
    <button className='m-5 border-3  border-black p-2 rounded-2xl w-18 bg-white text-black font-bold hover:bg-yellow-400 hover:text-white  shadow-md  shadow-gray-400'onClick={()=>{
      setbg("yellow")
    }}>Yellow</button>
    <button className='m-5 border-3  border-black p-2 rounded-2xl w-18 bg-white text-black font-bold hover:bg-green-500 hover:text-white  shadow-md  shadow-gray-400' onClick={()=>{
      setbg("green")
    }}>Green</button>
 
   </div>
   </div>
  
   </>

  )
}

export default App
