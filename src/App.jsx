import { useState, useEffect } from 'react';
import Header from './components/Header';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('blog-posts')) || [];
    setPosts(savedPosts);
  }, []);

  useEffect(() => {
    localStorage.setItem('blog-posts', JSON.stringify(posts));
  }, [posts]);

  const handleSubmit = (postData) => {
    if (editingPost) {
      setPosts(posts.map(post => 
        post.id === editingPost.id 
          ? { ...post, ...postData, updatedAt: new Date().toISOString() }
          : post
      ));
      setEditingPost(null);
    } else {
      const newPost = {
        id: Date.now(),
        ...postData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      setPosts([newPost, ...posts]);
    }
  };

  const handleEdit = (post) => setEditingPost(post);

  const handleDelete = (id) => {
    if (window.confirm('Delete this post?')) {
      setPosts(posts.filter(post => post.id !== id));
    }
  };

  const handleCancel = () => setEditingPost(null);

  return (
    <div>
      <Header />
      <PostForm post={editingPost} onSubmit={handleSubmit} onCancel={handleCancel} />
      <PostList posts={posts} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;
