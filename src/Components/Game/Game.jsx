import { useState } from "react"
import logo from "../../assets/images/logo.svg"
import p1Token from "../../assets/images/counter-yellow-small.svg"
import p2Token from "../../assets/images/counter-red-small.svg"
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
    ]

  })

  return (
    <>
      <section className="game">
        <Options></Options>
        <Scores></Scores>
        <Board game={game} setGame={setGame} players={players}></Board>
        <Turn game={game}></Turn>
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

const Board = ({ game, setGame, players }) => {


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
    //check horizontal
    for (let rIdx = 0; rIdx < game.board.length; rIdx++) {
      for (let cIdx = 0; cIdx < game.board[0].length - 3; cIdx++) {
        const player = players[game.board[rIdx][cIdx]];
        if (game.board[rIdx][cIdx] === player
          && game.board[rIdx][cIdx + 1] === player
          && game.board[rIdx][cIdx + 2] === player
          && game.board[rIdx][cIdx + 3] === player
        ) {
          setGame({ ...game, winner: players[player] })
          break;
        };
      }
    }

    // check vertical
    for (let rIdx = 0; rIdx < game.board.length - 3; rIdx++) {
      for (let cIdx = 0; cIdx < game.board[0].length; cIdx++) {
        const player = players[game.board[rIdx][cIdx]];
        if (game.board[rIdx][cIdx] === player
          && game.board[rIdx + 1][cIdx] === player
          && game.board[rIdx + 2][cIdx] === player
          && game.board[rIdx + 3][cIdx] === player
        ) {
          setGame({ ...game, winner: players[player] })
          break;
        };
      }
    }

    // check ascending diagonal
    for (let rIdx = 0; rIdx < game.board.length - 3; rIdx++) {
      for (let cIdx = 3; cIdx < game.board[0].length; cIdx++) {
        const player = players[game.board[rIdx][cIdx]];
        // console.log([rIdx, cIdx], [rIdx - 1, cIdx - 1], [rIdx - 2, cIdx - 2], [rIdx - 3, cIdx - 3])
        if (game.board[rIdx][cIdx] === player
          && game.board[rIdx + 1][cIdx - 1] === player
          && game.board[rIdx + 2][cIdx - 2] === player
          && game.board[rIdx + 3][cIdx - 3] === player
        ) {
          setGame({ ...game, winner: players[player] })
          break;
        };
      }
    }

    // check descending diagonal
    for (let rIdx = 0; rIdx < game.board.length - 3; rIdx++) {
      for (let cIdx = 0; cIdx < game.board[0].length - 3; cIdx++) {
        const player = players[game.board[rIdx][cIdx]];
        if (game.board[rIdx][cIdx] === player
          && game.board[rIdx + 1][cIdx + 1] === player
          && game.board[rIdx + 2][cIdx + 2] === player
          && game.board[rIdx + 3][cIdx + 3] === player
        ) {
          setGame({ ...game, winner: players[player] })
          break;
        };
      }
    }
  }

  const playToken = (ev) => {
    const row = ev.target.getAttribute("row");
    const col = ev.target.getAttribute("col");

    //traverse board and set P1 or P2 in the place of played token
    const nBoard = game.board.map(
      (r, rIdx) => r.map(
        (_, cIdx) => (cIdx == col && rIdx == row)
          ? game.player
          : game.board[rIdx][cIdx]
      )
    )
    setGame({
      ...game,
      player: game.player === players.P1 ? players.P2 : players.P1, // toggle between players
      board: nBoard
    })
    checkWinner()
    if (ev.target.getAttribute("row") > - 1)
      ev.target.setAttribute("row", + ev.target.getAttribute("row") - 1)
  }

  return (
    <div className="board">
      <div className="back layer"></div>
      <table className="mid layer play-area">
        <tbody>
          {game.board.map((row, rIdx) =>
            <tr key={rIdx}>
              {row.map((col, cIdx) =>
                <td key={cIdx}><Pellet rIdx={rIdx} cIdx={cIdx} player={game.player} /></td>
              )}
            </tr>
          )}
        </tbody>
      </table>
      <div className="front layer"></div>
      <div className="interactive layer">
        <div className="column" col="0" row="5" onClick={ev => playToken(ev)}></div>
        <div className="column" col="1" row="5" onClick={ev => playToken(ev)}></div>
        <div className="column" col="2" row="5" onClick={ev => playToken(ev)}></div>
        <div className="column" col="3" row="5" onClick={ev => playToken(ev)}></div>
        <div className="column" col="4" row="5" onClick={ev => playToken(ev)}></div>
        <div className="column" col="5" row="5" onClick={ev => playToken(ev)}></div>
        <div className="column" col="6" row="5" onClick={ev => playToken(ev)}></div>
      </div>
    </div>
  )
}



const Turn = ({ game }) => {
  return (
    <div className="turn">
      <p style={{ fontSize: "3rem", color: "white" }}>{
        game.winner ? " GANADOR" : ""
      }</p>
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