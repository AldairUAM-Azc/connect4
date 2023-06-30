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
  const [p1, setP1] = useState(true)
  const [board, setBoard] = useState([
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
  ]);

  const Pellet = ({ rIdx, cIdx }) => {
    const tokens = {
      true: p1Token,
      false: p2Token,
    }
    const noToken = ""
    const token = tokens[board[rIdx][cIdx]] ? tokens[board[rIdx][cIdx]] : noToken;

    return (
      <div className="pellet">
        <img src={token} />
      </div>
    )
  };


  const playToken = (ev) => {
    const row = +ev.target.getAttribute("row");
    const col = +ev.target.getAttribute("col");

    const nBoard = board.map(
      (r, rIdx) => r.map(
        (_, cIdx) => (cIdx == col && rIdx == row) ? p1 : board[rIdx][cIdx]
      )
    )
    setBoard(nBoard)
    setP1(!p1)
    if (ev.target.getAttribute("row") < 6)
      ev.target.setAttribute("row", + ev.target.getAttribute("row") + 1)
  }

  return (
    <div className="board">
      <div className="back layer"></div>
      <table className="mid layer play-area">
        <tbody>
          {board.map((row, rIdx) =>
            <tr key={rIdx}>
              {row.map((col, cIdx) =>
                <td key={cIdx}><Pellet rIdx={5 - rIdx} cIdx={cIdx} player={p1} /></td>
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