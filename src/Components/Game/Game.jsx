import { useState } from "react"
import logo from "../../assets/images/logo.svg"
import p1Token from "../../assets/images/counter-yellow-small.svg"
import p2Token from "../../assets/images/counter-red-small.svg"
import "./Game.css"

function Game() {
  return (
    <>
      <section className="game">
        <Options></Options>
        <Scores></Scores>
        <Board></Board>
        <Turn></Turn>
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

const Board = () => {
  const players = {
    P1: "P1",
    P2: "P2"
  }

  const [game, setGame] = useState({
    player: players.P1,
    board: [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
    ]
  })

  const Pellet = ({ rIdx, cIdx }) => {
    const tokens = {
      [players.P1]: p1Token,
      [players.P2]: p2Token,
    }
    const noToken = ""
    const token = tokens[game.board[rIdx][cIdx]] ? tokens[game.board[rIdx][cIdx]] : noToken;

    return (
      <div className="pellet">
        <img src={token} />
      </div>
    )
  };


  const checkWinner = () => {
    for (let rIdx = 0; rIdx < game.board.length; rIdx++) {
      const row = game.board[rIdx];
      for (let cIdx = 0; cIdx < row.length; cIdx++) {
        const col = row[cIdx];
        
      }
      
    }
  }

  const playToken = (ev) => {
    const row = +ev.target.getAttribute("row");
    const col = +ev.target.getAttribute("col");

    //traverse board and set P1 or P2 in the place of token
    const nBoard = game.board.map(
      (r, rIdx) => r.map(
        (_, cIdx) => (cIdx == col && rIdx == row)
          ? game.player
          : game.board[rIdx][cIdx]
      )
    )
    setGame({
      player: game.player === players.P1 ? players.P2 : players.P1, // toggle between players
      board: nBoard
    })
    checkWinner()
    if (ev.target.getAttribute("row") < 6)
      ev.target.setAttribute("row", + ev.target.getAttribute("row") + 1)
  }

  return (
    <div className="board">
      <div className="back layer"></div>
      <table className="mid layer play-area">
        <tbody>
          {game.board.map((row, rIdx) =>
            <tr key={rIdx}>
              {row.map((col, cIdx) =>
                <td key={cIdx}><Pellet rIdx={5 - rIdx} cIdx={cIdx} player={game.player} /></td>
              )}
            </tr>
          )}
        </tbody>
      </table>
      <div className="front layer"></div>
      <div className="interactive layer">
        <div className="column" col="0" row="0" onClick={ev => playToken(ev)}></div>
        <div className="column" col="1" row="0" onClick={ev => playToken(ev)}></div>
        <div className="column" col="2" row="0" onClick={ev => playToken(ev)}></div>
        <div className="column" col="3" row="0" onClick={ev => playToken(ev)}></div>
        <div className="column" col="4" row="0" onClick={ev => playToken(ev)}></div>
        <div className="column" col="5" row="0" onClick={ev => playToken(ev)}></div>
        <div className="column" col="6" row="0" onClick={ev => playToken(ev)}></div>
      </div>
    </div>
  )
}



const Turn = () => {
  return (
    <div className="turn">
      <div className="turn-bg">
        <div className="turn-sign">PLAYER 1'S TURN
          <br />
          <span className="timer">13s</span>
        </div>
      </div>
    </div>
  )
}



export default Game;