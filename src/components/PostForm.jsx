/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

const PostForm = ({ post, onSubmit, onCancel }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    
    onSubmit({
      title,
      content,
    });

    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <h2>{post ? 'Edit Post' : 'Create New Post'}</h2>
      <div>
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <textarea
          placeholder="Post Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <div className="form-buttons">
        <button type="submit">
          {post ? 'Update Post' : 'Create Post'}
        </button>
        {post && (
          <button  type="button" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
    
  );
};

export default PostForm;