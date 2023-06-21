import logo from "../../assets/images/logo.svg"
import "./Game.css"

function Game() {
  return (
    <section className="game">
      <div className="options">
        <button className="button">MENU</button>
        <img className="logo" src={logo} alt="Logo" />
        <button className="button">RESTART</button>
      </div>
      <div className="scores">
        <button className="button">PLAYER1
          <div>12</div>
        </button>
        <button className="button">PLAYER2
          <div>23</div>
        </button>
      </div>
      <div className="board">
        <div className="back layer"></div>
        <div className="mid layer play-area"></div>
        <div className="front layer"></div>
      </div>
    </section>
  );
}

export default Game;