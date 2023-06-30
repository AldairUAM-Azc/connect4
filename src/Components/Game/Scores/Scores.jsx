
const Scores = ({game, players}) => {
  return (
    <div className="scores">
      <button className="button">PLAYER1
        <div>{game.scores[players.P1]}</div>
      </button>
      <button className="button">PLAYER2
        <div>{game.scores[players.P2]}</div>
      </button>
    </div>
  )
}

export default Scores;