import { FC } from "react";
import { Post } from "@/types/API/post";
import { PostListItem } from "./PostListItem";

type Props = {
  posts: Post[];
};

export const PostList: FC<Props> = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => (
        <PostListItem post={post} key={post.id} />
      ))}
    </ul>
  );
};
