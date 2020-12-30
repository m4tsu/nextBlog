import { NextPage } from "next";
import { useRouter } from "next/router";
import { AiOutlineTag } from "react-icons/ai";
import { useGetPostsByTagName } from "@/api/tags";
import { Loading } from "@/components/commons/Loading";
import { PageTitle } from "@/components/commons/PageTitle";
import { PostList } from "@/components/commons/PostList";
import { CustomHead } from "@/components/layouts/CustomHead";
import { ResourceNotFound } from "@/components/page/error/ResourceNotFound";

const TagPage: NextPage = () => {
  const router = useRouter();
  const { name } = router.query;
  const { data, error } = useGetPostsByTagName(name as string);

  if (error !== undefined) {
    return <ResourceNotFound />;
  }

  return (
    <>
      <CustomHead title={`タグ: ${name}の記事一覧`} />
      <PageTitle>
        <AiOutlineTag className="mr-2" />
        {name} の記事一覧
      </PageTitle>
      {data ? <PostList posts={data.contents} /> : <Loading loading={true} />}
    </>
  );
};

export default TagPage;
