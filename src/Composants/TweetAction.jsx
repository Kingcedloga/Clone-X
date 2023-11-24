import favoriteIcon from "../images/React.svg";
import retweetIcon from "../images/Retweet.svg";
import replyIcon from "../images/Reply.svg";
import repliesIcon from "../images/Replies.svg";

const TweetAction = ({ valueFavoriteIcon, valueRetweetIcon, valueReplyIcon, valueRepliesIcon }) => {

  return (
    <div className="tweet-actions">
      <div className="tweet-action">
        <img src={replyIcon} alt="" />
        {valueReplyIcon}
      </div>
      <div className="tweet-action">
        <img src={retweetIcon} alt="" />
        {valueRetweetIcon}
      </div>
      <div className="tweet-action">
        <img src={favoriteIcon} alt="" />
        {valueFavoriteIcon}
      </div>
      <div className="tweet-action">
        <img src={repliesIcon} alt="" />
        {valueRepliesIcon}
      </div>
    </div>
  )
  
}

export default TweetAction;