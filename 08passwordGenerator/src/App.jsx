import { useState,useCallback,useEffect } from 'react'
import './App.css'

function App() {
  let [length,setLength]=useState(12)
  let [number,setNumber]=useState(false)
  let [char,setChar]=useState(false)
  let[password,setPassword]=useState("")

  const passwordGenerator=useCallback(()=>{

    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqqrstuvwxyz"
    if(number==true){
      str+="1230456789"
    }
    if(char==true){
      str+="<>:?{}_+-=[];'.,/</>"
    }

    let pass=""
    for( let i=0;i<length;i++){
     let num= Math.floor(Math.random() * (str.length + 1))
     pass+=str.charAt(num)

    }

    setPassword(pass)

  }
    
    
    ,[length,number,char])
 

    useEffect(()=>{
      passwordGenerator()
    },[passwordGenerator])

  




  return (
  <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-8 rounded-lg shadow-md space-y-6">

        {/* Password */}
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="font-medium">Password</label>
          <input
            type="text"
            id="password"
            name="password"
            className="border border-gray-300 rounded px-3 py-2"
            value={password}
            readOnly
          />
        </div>

        {/* length slider */}
        <div className="flex flex-col gap-2">
          <label htmlFor="volume" className="font-medium">Length:{length}</label>
          <input
            type="range"
            id="volume"
            name="volume"
            min="0"
            max="100"
            defaultValue={length}
            className="w-full"
            onChange={(e)=>{
              setLength(e.target.value)

            }}
          />
        </div>

        {/* Two checkboxes */}
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="option1" 
            name="option1" onChange={
              (e)=>{
              setNumber(e.target.checked)

            }} />
            <label htmlFor="option1">Numbers</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="option2" name="option2" onChange={(e)=>{
              setChar(e.target.checked)
            }} />
            <label htmlFor="option2">Characters</label>
          </div>
        </div>

      </form>
    </div>
  </>
);
}

export default App
