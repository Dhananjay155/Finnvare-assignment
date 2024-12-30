/* eslint-disable react/prop-types */
const Post = ({ post, onEdit, onDelete }) => {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <small>
        Created: {new Date(post.createdAt).toLocaleDateString()}
        {post.updatedAt !== post.createdAt && (
          ` (Updated: ${new Date(post.updatedAt).toLocaleDateString()})`
        )}
      </small>

      <div>
        <button className="yellow-btn" onClick={() => onEdit(post)}>Edit</button>
        <button className="red-btn" onClick={() => onDelete(post.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Post;
