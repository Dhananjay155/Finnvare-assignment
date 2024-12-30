/* eslint-disable react/prop-types */
import Post from './Post';

const PostList = ({ posts, onEdit, onDelete }) => {
  if (posts.length === 0) {
    return <p className="no-posts">No posts yet. Create your first post!</p>;
  }

  return (
    <div className="posts">
      {posts.map(post => (
        <Post
          key={post.id}
          post={post}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default PostList;
