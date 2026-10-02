import { useParams } from 'react-router-dom';
import PostCard from '../components/PostCard';

function PostDetailPage({ posts, deletePost }) {
  const { postId } = useParams();
  const post = posts.find(p => p.id === parseInt(postId));

    if (!post) {
    return (
      <main className="main-content">
        <h2>Post Not Found</h2>
        <p>The post you are looking for does not exist.</p>
      </main>
    );
  }

  return (
    <main className="main-content">
      <PostCard username={post.username} 
      avatar={post.avatar} 
      content={post.content} 
      timestamp={post.timestamp} 
      likes={post.likes} 
      comments={post.comments} 
      shares={post.shares} 
      postId={post.id} 
      onDeletePost={deletePost} 
    />
    </main>
    );
}

export default PostDetailPage;