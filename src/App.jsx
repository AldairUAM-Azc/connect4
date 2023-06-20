import { useState } from 'react'
import MainMenu from './MainMenu'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <MainMenu></MainMenu>
    </>
  )
}

export default App
