import { useState } from 'react'
import './App.css'

function App() {
  const [color , setColor] = useState(Black)
   function but(){

   }

  return (
   <>
   <body className='text-white bg-black'>

   <button onClick={but} className='bg-red-500'>Red</button>
    
   </body>
  
   </>
  )
}

export default App
