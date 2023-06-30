import { useEffect, useState } from "react";

const Turn = ({ game, setGame, players, countdown, setCountDown}) => {

  
  
  useEffect(() => {
    // if time runs out the other wins
    if (!countdown) {
      const otherPlayer  = game.player === players.P1 ? players.P2 : players.P1
      setGame({
        ...game,
        winner: otherPlayer,
        scores: {...game.scores, [otherPlayer]: game.scores[otherPlayer] + 1}
      });
      return;
    }

    const timer = setInterval(() => {
      setCountDown(countdown - 1);
    }, 1000)
    
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