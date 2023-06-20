import logo from "./assets/images/logo.svg"
import pvp from "./assets/images/player-vs-player.svg"
import "./MainMenu.css"

function MainMenu(){
    return (
        <section className="main-menu">
            <img className="logo" src={logo}></img>
            <div>
                <button className="y-button">PLAY VS PLAYER
                    <img className="icon" src={pvp}></img>
                </button>
                <button className="w-button">GAME RULES</button>
            </div>
        </section>
    )
}

export default MainMenu;