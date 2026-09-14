import { useState } from 'react'

import './App.css'

function App() {
  let [counter , setCounter]=useState(15)
  //let counter=15;
  function addValue(){
    
    //counter = counter + 1 
    setCounter(counter +  1 ) 
    console.log("The value of the counter is ",counter)
  }
  function subValue(){
    if(counter === 1) return 
    //counter = counter - 1
    setCounter(counter - 1 ) 
    console.log("The value of the counter is ",counter)

  }
  

  return (
   <>
    <h1>Chai aur code</h1>
    <h3>The value of Counter {counter}</h3>
    <br />
    <button onClick={addValue}>Increase by one </button>
    <button onClick={subValue}>Decrease by one </button>
   </>
  )
}

export default App
