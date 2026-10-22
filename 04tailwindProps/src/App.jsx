import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
   let someObj={gender:"Male"}

  return (
    <>
  <h1>Tailwind Test </h1>
  <Card username ="Monkey "  someObject={someObj} />
  <Card username="Bitcoin"  someObject={someObj} />

    </>
  )
}

export default App
