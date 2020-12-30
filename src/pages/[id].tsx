import { GetStaticProps, GetStaticPaths } from "next";
import styles from "./[id].module.scss";
import cheerio from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/hybrid.css";
import { useRouter } from "next/router";
import { toDate } from "@/lib/moment";
import { TagsList } from "@/components/page/posts/TagsList";
import { Loading } from "@/components/commons/Loading";
import { CustomHead } from "@/components/layouts/CustomHead";
import { NextPage } from "next";
import { Post } from "@/types/API/post";
import { fetchPost } from "@/api/fetchers/posts";
import Error from "next/error";

type Props = {
  post?: Post;
  highlightedContent?: string;
  errors?: any;
};
const Page: NextPage<Props> = ({ post, highlightedContent, errors }) => {
  const router = useRouter();
  console.log("errors", errors);
  console.log("post", post);
  console.log(highlightedContent);
  console.log("isfallback", router.isFallback);

  if (!router.isFallback && (!post || !highlightedContent)) {
    return <Error statusCode={404} />;
  }

  if (!post || !highlightedContent) {
    return <Loading loading={true} />;
  }

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
  const paths: any[] = [];

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<Props, { id: string }> = async ({
  params,
}) => {
  try {
    const post = await fetchPost(params?.id as string);

    // コードブロックのスタイリング
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
};

export default Page;
