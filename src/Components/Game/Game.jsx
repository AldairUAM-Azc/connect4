import { useState } from "react"
import logo from "../../assets/images/logo.svg"
import Board from "../Game/Board/Board"
import Turn from "../Game/Turn/Turn"
import "./Game.css"

function Game() {
  const players = {
    P1: "P1",
    P2: "P2",
    noPlayer: null
  }

  const [game, setGame] = useState({
    player: players.P1,
    winner: players.noPlayer,
    board: [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ],
  })

  const turnTime = 10 //seconds
  const [countdown, setCountDown] = useState(turnTime) //cant put countdown in game State since will trigger  a rerender every damn second
  const resetCountdown = () => setCountDown(turnTime)



  return (
    <>
      <section className="game">
        <Options></Options>
        <Scores></Scores>
        <Board game={game} setGame={setGame} players={players} resetCountdown={resetCountdown} ></Board>
        <Turn game={game} setGame={setGame} players={players} countdown={countdown} setCountDown={setCountDown}></Turn>
      </section>
      <div className="bg-decoration"></div>
    </>
  );
}

const Options = () => {
  return (
    <div className="options">
      <button className="button">MENU</button>
      <img className="logo" src={logo} alt="Logo" />
      <button className="button">RESTART</button>
    </div>
  )
}

const Scores = () => {
  return (
    <div className="scores">
      <button className="button">PLAYER1
        <div>12</div>
      </button>
      <button className="button">PLAYER2
        <div>23</div>
      </button>
    </div>
  )
}






export default Game;