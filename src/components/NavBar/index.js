import './index.css'

const NavBar = props => {
  const {score, topScore, gameInProgress} = props
  return (
    <>
      <div className="navBarContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logoImage"
        />
        <h1 className="EmojiText">Emoji Game</h1>
      </div>
      {gameInProgress && (
        <div className="navBarContainerScore">
          <p className="scoreAndTop">Score: {score}</p>
          <p className="scoreAndTop">Top Score: {topScore}</p>
        </div>
      )}
    </>
  )
}

export default NavBar
