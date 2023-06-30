import { useState } from "react"
import Board from "../Game/Board/Board"
import Turn from "../Game/Turn/Turn"
import Scores from "../Game/Scores/Scores"
import Options from "../Game/Options/Options"
import "./Game.css"

function Game() {
  const players = {
    P1: "P1",
    P2: "P2",
    noPlayer: null
  }

  const initialGame = {
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
    scores: {
      [players.P1]: 0,
      [players.P2]: 0
    }
  }

  const [game, setGame] = useState(initialGame)

  const turnTime = 30 //seconds
  const [countdown, setCountDown] = useState(turnTime) //cant put countdown in game State since will trigger  a rerender every damn second
  const resetCountdown = () => setCountDown(turnTime)

  return (
    <>
      <section className="game">
        <Options></Options>
        <Scores game={game} setGame={setGame} players={players}></Scores>
        <Board game={game} setGame={setGame} players={players} resetCountdown={resetCountdown} ></Board>
        <Turn game={game} setGame={setGame} players={players} countdown={countdown} setCountDown={setCountDown}></Turn>
      </section>
      <div className="bg-decoration"></div>
    </>
  );
}

export default Game;