import './index.css'

const EmojiCard = props => {
  const {details, EmojiClick} = props
  const {id, emojiName, emojiUrl} = details
  const BtnClick = () => {
    EmojiClick(id)
  }
  return (
    <li className="emojiElement">
      <button type="button" onClick={BtnClick} className="emojiBtn">
        <img src={emojiUrl} alt={emojiName} className="emojiImage" />
      </button>
    </li>
  )
}

export default EmojiCard
