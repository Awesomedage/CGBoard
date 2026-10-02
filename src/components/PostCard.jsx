import './PostCard.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function PostCard({ username, avatar, content, timestamp, likes, comments, shares, postId, onDeletePost }) {

  const [likeCount, setLikeCount] = useState(likes);
  const [shareCount, setShareCount] = useState(shares);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  const handleShare = () => {
    setShareCount(shareCount + 1);
  };

  return (
    <div className="post-card">
      <div className="post-header">
        <img src={avatar} alt="User avatar" className="avatar" />
        <div className="user-info">
          <h3 className="username">{username}</h3>
          <span className="timestamp">{timestamp}</span>
        </div>
      </div>

      {/*<p className="post-content">{content}</p>*/}

      <Link to={`/post/${postId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <p className="post-content">{content}</p>
      </Link>

      <div className="post-actions">
        <button className="action-btn" onClick={handleLike}>
          👍 {likeCount}
        </button>

        <button className="action-btn">
          💬 {comments}
        </button>

        <button className="action-btn" onClick={handleShare}>
          🔄 {shareCount}
        </button>

        <button className="delete-btn" onClick={() => onDeletePost(postId)}>
          Delete Post
        </button>
      </div>
    </div>
  );
}

export default PostCard;