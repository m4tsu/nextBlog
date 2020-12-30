import { GetStaticProps, GetStaticPaths } from "next";
import styles from "./[id].module.scss";
import cheerio from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/hybrid.css";
import { useRouter } from "next/router";
// import { useGetPost } from "@/api/posts";
import { toDate } from "@/lib/moment";
import { TagsList } from "@/components/page/posts/TagsList";
import { Loading } from "@/components/commons/Loading";
import { CustomHead } from "@/components/layouts/CustomHead";
import { NextPage } from "next";
import { Post } from "@/types/API/post";
import { fetchPost } from "@/api/fetchers/posts";
// import { ParsedUrlQuery } from "querystring";

type Props = {
  post?: Post;
  highlightedContent?: string;
  errors?: any;
};
const Page: NextPage<Props> = ({ post, highlightedContent, errors }) => {
  const router = useRouter();
  // const { id } = router.query;
  // const { data } = useGetPost(id as string);
  console.log(post);
  console.log(highlightedContent);
  // const data = post;

  if (router.isFallback || !post || !highlightedContent) {
    console.log(post);
    console.log(errors);
    return <Loading loading={true} />;
  }

  // コードブロックにハイライト用クラスを付与
  // const $ = cheerio.load(post.content);
  // $("pre code").each((_, elm) => {
  //   const result = hljs.highlightAuto($(elm).text());
  //   $(elm).html(result.value);
  //   $(elm).addClass("hljs");
  // });

  // const highlightedContent = $.html();

  return (
    <>
      <CustomHead title={post.title} />
      <div className="w-full border-b border-white pb-2 mb-4">
        <div className="flex flex-col">
          <h1 className="text-3xl mt-2 mb-2 font-bold flex items-center">
            {post.title}
          </h1>
          <div className="flex flex-row items-center">
            <time className="flex-shrink-0 pr-2">
              {toDate(post.publishedAt)}
            </time>
            <TagsList tags={post.tags} />
          </div>
        </div>
      </div>

      <div
        id={styles["blog-body"]}
        dangerouslySetInnerHTML={{
          __html: highlightedContent,
        }}
      />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  const paths: any[] = [];

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true };
};

// type StaticPropsResult = {
//   post?: Post;
//   errors?: any;
//   // highlightedContent: string;
//   // errors?: any;
// };

export const getStaticProps: GetStaticProps<Props, { id: string }> = async ({
  params,
}) => {
  try {
    const post = await fetchPost(params?.id as string);

    const $ = cheerio.load(post.content);
    $("pre code").each((_, elm) => {
      const result = hljs.highlightAuto($(elm).text());
      $(elm).html(result.value);
      $(elm).addClass("hljs");
    });
    const highlightedContent = $.html();

    return { props: { post, highlightedContent }, revalidate: 180 };
  } catch (err) {
    console.log(err);
    return { props: { errors: err.message }, revalidate: 180 };
  }

  // return { props: { post, highlightedContent }, revalidate: 300 };
};

export default Page;
