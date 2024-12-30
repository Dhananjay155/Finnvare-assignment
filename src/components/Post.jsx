/* eslint-disable react/prop-types */
const Post = ({ post, onEdit, onDelete }) => {
    return (
      <article className="post">
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <div className="post-metadata">
          <small>
            Created: {new Date(post.createdAt).toLocaleDateString()}
            {post.updatedAt !== post.createdAt && 
              ` (Updated: ${new Date(post.updatedAt).toLocaleDateString()})`}
          </small>
        </div>
        <div className="post-actions">
          <button className="yellow-btn" onClick={() => onEdit(post)}>Edit</button>
          <button className="red-btn" onClick={() => onDelete(post.id)}>Delete</button>
        </div>
      </article>
    );
  };
  
  export default Post;