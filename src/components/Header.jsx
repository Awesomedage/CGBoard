import "./Header.css";
import { Link } from "react-router-dom";

function Header({ postCount }) {
  return (
    <header className="app-header">
      <h1 className="logo">🐝 CGBoard</h1>

      {postCount > 0 && (
        <div>
          <span className="post-badge">{postCount}</span>
        </div>
      )}

      <nav className="nav-menu">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/explore" className="nav-link">Explore</Link>
        <Link to="/messages" className="nav-link">Messages</Link>
        <Link to="/profile" className="nav-link">Profile</Link>
        <Link to="/about">
        <button className="post-btn">About Page</button>
      </Link>
      </nav>

      <div>
        <span>Posts</span>
      </div>

      <button className="post-btn">New Post</button>
    </header>
  );
}

export default Header;

