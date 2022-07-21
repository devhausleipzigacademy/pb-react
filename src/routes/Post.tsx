import { useParams } from "react-router-dom";
import { posts } from "../data/posts";

export default function Post() {
  const { postId } = useParams();
  const post = posts.find((post) => post.id === parseInt(postId!));

  if (!post) {
    return <p>No post for id {postId} found</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}