import { GetStaticProps, NextPage } from "next";
// import { useGetPosts } from "@/api/posts";
// import { Loading } from "@/components/commons/Loading";
import { PageTitle } from "@/components/commons/PageTitle";
import { PostList } from "@/components/commons/PostList";
import { Post } from "@/types/API/post";
import { fetchAllPosts } from "@/api/fetchers/posts";

type Props = {
  posts: Post[];
};

const Page: NextPage<Props> = ({ posts }) => {
  // const { data } = useGetPosts();
  return (
    <>
      {/* <CustomHead title="記事一覧" /> */}
      <PageTitle>記事一覧</PageTitle>
      {/* {data ? <PostList posts={data.contents} /> : <Loading loading={!data} />} */}
      <PostList posts={posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = (await fetchAllPosts()).contents;
  console.log(posts);
  return { props: { posts }, revalidate: 300 };
};

export default Page;
