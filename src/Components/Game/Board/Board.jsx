import p1Token from "../../../assets/images/counter-yellow-small.svg"
import p2Token from "../../../assets/images/counter-red-small.svg"

const Board = ({ game, setGame, players, resetCountdown }) => {

  const playToken = (ev) => {
    const row = ev.target.getAttribute("row");
    const col = ev.target.getAttribute("col");

    //traverse board and set P1 or P2 in the place of played token
    const newBoard = game.board.map(
      (r, rIdx) => r.map(
        (_, cIdx) => (cIdx == col && rIdx == row)
          ? game.player
          : game.board[rIdx][cIdx]
      )
    )
    //update board
    setGame({
      ...game,
      player: game.player === players.P1 ? players.P2 : players.P1, // toggle between players
      board: newBoard,
    })
    //
    checkWinner()
    resetCountdown()

    if (ev.target.getAttribute("row") > - 1)
      ev.target.setAttribute("row", + ev.target.getAttribute("row") - 1)
  }

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



export default Board