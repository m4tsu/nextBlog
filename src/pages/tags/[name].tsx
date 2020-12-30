import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { AiOutlineTag } from "react-icons/ai";
import { Loading } from "@/components/commons/Loading";
import { PageTitle } from "@/components/commons/PageTitle";
import { PostList } from "@/components/commons/PostList";
import { CustomHead } from "@/components/layouts/CustomHead";
import { fetchTagByName } from "@/api/fetchers/tags";
import { fetchPostByTag } from "@/api/fetchers/posts";
import { Post } from "@/types/API/post";
import Error from "next/error";

type Props = {
  posts?: Post[];
  error?: any;
};

const TagPage: NextPage<Props> = ({ posts, error }) => {
  const router = useRouter();
  console.log("errors", error);
  console.log("posts", posts);
  console.log("isfallback", router.isFallback);

  if (!router.isFallback && !posts) {
    return <Error statusCode={404} />;
  }
  // const { name } = router.query;
  // const { data, error } = useGetPostsByTagName(name as string);

  // if (error !== undefined) {
  //   return <ResourceNotFound />;
  // }

  if (!posts) {
    return <Loading loading={true} />;
  }

  return (
    <>
      <CustomHead title={`タグ: ${name}の記事一覧`} />
      <PageTitle>
        <AiOutlineTag className="mr-2" />
        {name} の記事一覧
      </PageTitle>
      {/* {data ? <PostList posts={data.contents} /> : <Loading loading={true} />} */}
      <PostList posts={posts} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: any[] = [];

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<Props, { name: string }> = async ({
  params,
}) => {
  try {
    const tag = (await fetchTagByName(params?.name as string)).contents[0];
    const posts = (await fetchPostByTag(tag.id)).contents;

    return { props: { posts }, revalidate: 180 };
  } catch (err) {
    console.log(err);
    return { props: { error: err.message }, revalidate: 180 };
  }
};

export default TagPage;
