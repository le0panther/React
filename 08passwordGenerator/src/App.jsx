import { useState,useCallback,useEffect } from 'react'
import './App.css'

function App() {
  let [length, setlength] = useState(8)
  let[numbers,setNumbers]=useState(false)
  let[characters,setCharacters]=useState(false)
  let[password,setPassword]=useState("")

  

 const passwordGenerator=useCallback(
  ()=>{
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let pass=""
    if(numbers==true){
      str+="0123456789"
    }
    if(characters==true){
      str+=",.<>?;:{[}]-_=+"
    }

    for( let i=0 ;i<length;i++){
      const size= Math.floor(Math.random() * (str.length ));
      pass+=str.charAt(size)
    }

    setPassword(pass)
 },[numbers,characters,length])


 useEffect(() => {
    passwordGenerator()
  }, [passwordGenerator])

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

        {/* Volume slider */}
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
            onChange={(e)=>{ setlength(e.target.value)}}
          />
        </div>

        {/* Two checkboxes */}
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="option1" 
            onChange={() => setNumbers((prev) => !prev)}name="option1" />
            <label htmlFor="option1">Numbers</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="option2"onChange={() => setCharacters((prev) => !prev)} name="option2" />
            <label htmlFor="option2">Characters</label>
          </div>
        </div>

      </form>
    </div>
  </>
);
}

export default App
