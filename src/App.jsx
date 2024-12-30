import { useState, useEffect } from 'react';
import Header from './components/Header';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    const savedPosts = localStorage.getItem('blog-posts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('blog-posts', JSON.stringify(posts));
  }, [posts]);

  const handleSubmit = (postData) => {
    if (editingPost) {
      // Update existing post
      setPosts(posts.map(post => 
        post.id === editingPost.id 
          ? { 
              ...post, 
              ...postData, 
              updatedAt: new Date().toISOString() 
            }
          : post
      ));
      setEditingPost(null);
    } else {
      // Create new post
      const newPost = {
        id: Date.now(),
        ...postData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      setPosts([newPost, ...posts]);
    }
  };

  const handleEdit = (post) => {
    setEditingPost(post);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      setPosts(posts.filter(post => post.id !== id));
    }
  };

  const handleCancel = () => {
    setEditingPost(null);
  };

  return (
    <div className="app">
      <Header />
      <main>
        <PostForm
          post={editingPost}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
        <h2>Posts</h2>
        <PostList
          posts={posts}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </main>
    </div>
  );
}

export default App;