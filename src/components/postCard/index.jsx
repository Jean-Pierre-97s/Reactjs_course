import "./styles.css";
import P from "prop-types";

export const PostCard = ({ post }) => (
  <div className="post">
    <img src={post.cover} alt={post.title} />
    <div className="post-content">
      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
    </div>
  </div>
);

PostCard.propTypes = {
  post: P.shape({
    title: P.string.isRequired,
    cover: P.string.isRequired,
    body: P.string.isRequired,
    id: P.number.isRequired,
  }).isRequired,
};
