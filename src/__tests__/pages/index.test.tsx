import React from "react";
import IndexPage from "@/pages/index";
import { render } from "@/test/testUtils";
import { Post } from "@/types/API/post";

const posts: Post[] = [
  {
    id: "test-post",
    title: "post Title",
    content: "本文です本文です本文です本文です本文です本文です本文です",
    tags: [],
    createdAt: new Date("December 10, 2019").toISOString(),
    updatedAt: new Date("December 10, 2019").toISOString(),
    publishedAt: new Date("December 10, 2019").toISOString(),
    revisedAt: new Date("December 10, 2019").toISOString(),
  },
];

describe("Index page", () => {
  it("has post title", () => {
    const { getByText } = render(<IndexPage posts={posts} />, {});
    expect(getByText(posts[0].title)).toBeInTheDocument();
  });
});
