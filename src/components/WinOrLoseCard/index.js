import './index.css'

const WinOrLoseCard = props => {
  const {score, emojisList, restartGame} = props
  const setScores = () => {
    restartGame(score)
  }

  if (score === emojisList.length) {
    return (
      <div className="WinContainer">
        <div className="WinMessageContainer">
          <h1 className="WinHead">You Won</h1>
          <p className="bestScoreCSS">Best Score</p>
          <p className="scoreCSS">
            {score - 1}/{emojisList.length}
          </p>
          <button onClick={setScores} type="button" className="playAgainBtn">
            Play Again
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
          className="winImage"
        />
      </div>
    )
  }
  return (
    <div className="WinContainer">
      <div className="WinMessageContainer">
        <h1 className="WinHead">You Lose</h1>
        <p className="betScoreCSS">Score</p>
        <p className="scoreCSS">
          {score}/{emojisList.length}
        </p>
        <button onClick={setScores} type="button" className="playAgainBtn">
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="win or lose"
        className="winImage"
      />
    </div>
  )
}

export default WinOrLoseCard
