import { GetStaticProps, NextPage } from "next";
import { PageTitle } from "@/components/commons/PageTitle";
import { PostList } from "@/components/commons/PostList";
import { Post } from "@/types/API/post";
import { fetchAllPosts } from "@/api/fetchers/posts";

type Props = {
  posts: Post[];
};

const Page: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <PageTitle>記事一覧</PageTitle>
      <PostList posts={posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await fetchAllPosts();
  const posts = data.contents;
  return { props: { posts }, revalidate: 180 };
};

export default Page;
