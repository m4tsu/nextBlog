import React, { FC } from "react";
import { toDate } from "@/lib/moment";
import { Post } from "@/types/API/post";
import { TypedLink, Paths } from "@/routes";
import { TagsList } from "@/components/page/posts/TagsList";

type Props = {
  post: Post;
};
export const PostListItem: FC<Props> = ({ post }) => {
  const content =
    post.content.replace(/<.*?>/g, " ").replace(/<.*/, "").substr(0, 200) +
    " ...";

  return (
    <li className="border bg-primary border-secondary rounded text-white mb-4 ">
      <div className="p-2 block rounded">
        <div className="border-b border-secondary flex flex-col pb-2">
          <TypedLink path={Paths.post} params={{ id: post.id }}>
            <h2 className="break-all text-2xl py-1 border-b border-primary hover:text-tertiary transition">
              {post.title}
            </h2>
          </TypedLink>

          <div className="flex flex-row items-center">
            <time className="flex-shrink-0 mr-2">
              {toDate(post.publishedAt)}
            </time>
            <TagsList tags={post.tags} />
          </div>
        </div>

        <div
          className="text-neutral"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <TypedLink
          path={Paths.post}
          params={{ id: post.id }}
          className="text-white border-b border-neutral hover:text-tertiary hover:border-tertiary transition"
        >
          続きを読む
        </TypedLink>
      </div>
    </li>
  );
};
