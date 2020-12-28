// import { GetStaticProps, GetStaticPaths } from 'next'
import styles from "./[id].module.scss";
import cheerio from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/hybrid.css";
import { useRouter } from "next/router";
import { useGetPost } from "../api/posts";
import { toDate } from "../lib/moment";
import { TagsList } from "../components/page/posts/TagsList";
import { Loading } from "../components/commons/Loading";
import { CustomHead } from "../components/layouts/CustomHead";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useGetPost(id as string);

  if (!data) {
    return <Loading loading={!data} />;
  }

  // コードブロックにハイライト用クラスを付与
  const $ = cheerio.load(data.content);
  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });

  const highlightedContent = $.html();

  return (
    <>
      <CustomHead title={data.title} />
      <div className="w-full border-b border-white pb-2 mb-4">
        <div className="flex flex-col">
          <h1 className="text-3xl mt-2 mb-2 font-bold flex items-center">
            {data.title}
          </h1>
          <div className="flex flex-row items-center">
            <time className="flex-shrink-0 pr-2">
              {toDate(data.publishedAt)}
            </time>
            <TagsList tags={data.tags} />
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

export default Post;

// export const getStaticPaths: GetStaticPaths = async () => {
//   // Get the paths we want to pre-render based on users
//   const paths = sampleUserData.map((user) => ({
//     params: { id: user.id.toString() },
//   }))

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false }
// }

// // This function gets called at build time on server-side.
// // It won't be called on client-side, so you can even do
// // direct database queries.
// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   try {
//     const id = params?.id
//     const item = sampleUserData.find((data) => data.id === Number(id))
//     // By returning { props: item }, the StaticPropsDetail component
//     // will receive `item` as a prop at build time
//     return { props: { item } }
//   } catch (err) {
//     return { props: { errors: err.message } }
//   }
// }
