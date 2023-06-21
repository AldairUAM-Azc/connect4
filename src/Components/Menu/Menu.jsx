import "./Menu.css"
import logo from "../../assets/images/logo.svg"
import pvp from "../../assets/images/player-vs-player.svg"

function Menu({ setView, views }) {
  return (
    <div className="main-menu">
      <img className="logo" src={logo}></img>
      <div>
        <button className="button y-button"
          onClick={() => setView(views.Game)}>PLAY VS PLAYER
          <img className="icon" src={pvp}></img>
        </button>
        <button className="button w-button">GAME RULES</button>
      </div>
    </div>

  )
}

export default Menu;