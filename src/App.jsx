import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PostDetailPage from './pages/PostDetailPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

const defaultPosts = [
  {
    id: 1,
    username: "TechGuru42",
      avatar: "https://placehold.co/100x100/FF6B6B/ffffff?text=TG42",
      content: "Finally understood props in React. It's like function arguments!",
      timestamp: "5 minutes ago",
      likes: 5,
      comments: 3,
      shares: 1
    },
    {
      id: 2,
      username: "CodeNinja",
      avatar: "https://placehold.co/40x40/4ECDC4/ffffff?text=CN",
      content: "Building a social media clone to learn React. Best way to learn! 💪",
      timestamp: "20 minutes ago",
      likes: 22,
      comments: 5,
      shares: 2
    },
    {
      id: 3,
      username: "DebugQueen",
      avatar: "https://placehold.co/40x40/95E77E/ffffff?text=DQ",
      content: "React components + props = unlimited possibilities🚀",
      timestamp: "59 minutes ago",
      likes: 51,
      comments: 6,
      shares: 4
    }
  ];
function App() {
  // Initialize state from localStorage or use defaultPosts
  const [posts, setPosts] = useState(() => {
    const savedPosts = localStorage.getItem("posts");
    return savedPosts ? JSON.parse(savedPosts) : defaultPosts;
  });

// Save posts to localStorage whenever post state changes changes
  useEffect(() => {
    try {
    localStorage.setItem("posts", JSON.stringify(posts)); }
    catch (error) { 
      console.warn('Could not save cart to localStorage:', error);
    }
  }, [posts]);

  const addPost = (data) => {
    const newPost = {
      id: posts.length + 1,
      username: data.username,
      content: data.content,
      avatar: "https://placehold.co/100x100/4ECDC4/ffffff",
      timestamp: "0 minutes ago",
      likes: 0,
      comments: 0,
      shares: 0
    };
    setPosts([...posts, newPost]);
  };

  const deletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  // Top posts (20+ likes)
  const topPosts = posts.filter(post => post.likes >= 20);

  // Engagement stats
  const totalLikes = posts.reduce((total, post) => total + post.likes, 0);
  const totalComments = posts.reduce((total, post) => total + post.comments, 0);
  const totalShares = posts.reduce((total, post) => total + post.shares, 0);
  const totalEngagement = totalLikes + totalComments + totalShares;

  return (
    <BrowserRouter>
      <div className="app">
        <Header postCount={posts.length} />

        <Routes>
          <Route path="/" element={<HomePage posts={posts} 
          topPosts={topPosts} addPost={addPost} deletePost={deletePost}/>}/>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/post/:postId" element={<PostDetailPage posts={posts} deletePost={deletePost} />} />
        </Routes>

        <Footer
          totalLikes={totalLikes}
          totalComments={totalComments}
          totalShares={totalShares}
          totalEngagement={totalEngagement}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
