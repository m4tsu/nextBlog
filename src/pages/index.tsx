// import { GetStaticProps } from 'next'
import { useGetPosts } from "../api/posts";
import { Loading } from "../components/commons/Loading";
import { PageTitle } from "../components/commons/PageTitle";
import { PostList } from "../components/commons/PostList";
import { CustomHead } from "../components/layouts/CustomHead";

const PostsPage = () => {
  const { data, error } = useGetPosts();
  return (
    <>
      {/* <CustomHead title="記事一覧" /> */}
      <PageTitle>記事一覧</PageTitle>
      {data ? <PostList posts={data.contents} /> : <Loading loading={!data} />}
    </>
  );
};

// export const getStaticProps: GetStaticProps = async () => {
//   // Example for including static props in a Next.js function component page.
//   // Don't forget to include the respective types for any props passed into
//   // the component.
//   const items: User[] = sampleUserData
//   return { props: { items } }
// }

export default PostsPage;
