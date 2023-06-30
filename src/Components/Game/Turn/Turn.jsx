import { useEffect, useState } from "react";

const Turn = ({ game, setGame, players, countdown, setCountDown}) => {

  

  useEffect(() => {
    const timer = setInterval(() => {
      setCountDown(countdown - 1);
    }, 1000)
    // if time runs out the other wins
    if (!countdown) {
      setGame({
        ...game,
        winner: game.winner == players.P1 ? players.P1 : players.P2
      });
      return;
    }
    return () => clearInterval(timer)
  }, [countdown])

  return (
    <div className="turn">
      <div className="turn-bg">
        <div className="turn-sign">{game.player === players.P1 ? "PLAYER 1" : "PLAYER 2"}'S TURN
          <br />
          <span className="timer">{countdown}s</span>
        </div>
      </div>
    </div>
  )
}

export default Turn;