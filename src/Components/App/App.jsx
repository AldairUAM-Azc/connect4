import { useState } from 'react'

import Game from "../Game/Game"
import Menu from "../Menu/Menu"
import './App.css'


const views = {
  Menu: "menu",
  Game: "game",
}

function App() {
  const [view, setView] = useState(views.Menu);
  
  return (
    <div className='main-container'>
      {/* I prefer this state machine approach  instead of Router cause simplicity*/}
      {view == views.Menu && <Menu setView={setView} views={views} />}
      {view == views.Game && <Game />}
    </div>

  )
}

export default App;