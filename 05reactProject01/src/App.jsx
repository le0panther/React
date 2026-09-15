import { useState } from 'react'
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState('white')

  return (
    <div style={{ backgroundColor: bgColor, minHeight: '100vh',  }}>
      <h1>Changing the background color</h1>
      <footer>
        <button onClick={() => setBgColor('red')} >
          Red
        </button>
        <button onClick={() => setBgColor('White')}>
          White
        </button>
        <button onClick={() => setBgColor('Blue')}>
          Blue
        </button>
      </footer>
    </div>
  )
}

export default App