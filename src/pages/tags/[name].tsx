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

  if (!router.isFallback && !posts) {
    return <Error statusCode={404} />;
  }
  const { name } = router.query;

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
    const data = await fetchTagByName(params?.name as string).then((data) => {
      return fetchPostByTag(data.contents[0].id);
    });
    const posts = data.contents;

    return { props: { posts }, revalidate: 180 };
  } catch (err) {
    console.log(err);
    return { props: { error: err.message }, revalidate: 180 };
  }
};

export default TagPage;
