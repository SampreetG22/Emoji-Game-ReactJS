import {Component} from 'react'
import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    IDList: [],
    gameInProgress: true,
    score: 0,
    topScore: 0,
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojis = () => {
    const shuffledList = this.getShuffledEmojisList()
    const {score, topScore, gameInProgress} = this.state
    return (
      <>
        <div className="navBar">
          <NavBar
            score={score}
            topScore={topScore}
            gameInProgress={gameInProgress}
          />
        </div>
        <ul className="emojisContainer">
          {shuffledList.map(eachEmoji => (
            <EmojiCard
              key={eachEmoji.id}
              details={eachEmoji}
              EmojiClick={this.EmojiClick}
            />
          ))}
        </ul>
      </>
    )
  }

  renderResults = () => {
    const {score, topScore, gameInProgress} = this.state
    const {emojisList} = this.props
    return (
      <>
        <div className="navBar">
          <NavBar
            score={score}
            topScore={topScore}
            gameInProgress={gameInProgress}
          />
        </div>
        <WinOrLoseCard
          score={score}
          emojisList={emojisList}
          restartGame={this.restartGame}
        />
      </>
    )
  }

  EmojiClick = ID => {
    const {IDList} = this.state
    if (IDList.includes(ID)) {
      this.setState({
        gameInProgress: false,
      })
    } else {
      this.setState(prevState => ({
        score: prevState.score + 1,
        IDList: [...prevState.IDList, ID],
      }))
    }
  }

  restartGame = score => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (score > topScore) {
      newTopScore = score
    }
    this.setState({
      gameInProgress: true,
      topScore: newTopScore,
      score: 0,
      IDList: [],
    })
  }

  render() {
    const {gameInProgress} = this.state
    return (
      <div className="mainContainer">
        <div className="bottomContainer">
          {gameInProgress ? this.renderEmojis() : this.renderResults()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
