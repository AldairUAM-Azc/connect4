import { useState } from 'react'

import './App.css'
import Game from "../Game/Game"
import Menu from "../Menu/Menu"


const views = {
  Menu: "menu",
  Game: "game",
}

function App() {
  const [view, setView] = useState(views.Menu);
  {console.log(view)}
  return (

    <div>
      {/* I prefer this state machine approach  instead of Router cause simplicity*/}
      {view == views.Menu && <Menu setView={setView} views={views} />}
      {view == views.Game && <Game />}
    </div>

  )
}

export default App;