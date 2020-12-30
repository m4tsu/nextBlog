import { GetStaticProps, NextPage } from "next";
import { AiOutlineTags } from "react-icons/ai";
import { PageTitle } from "@/components/commons/PageTitle";
import { CustomHead } from "@/components/layouts/CustomHead";
import { AllTagsList } from "@/components/page/tags/AllTagsList";
import { Tag } from "@/types/API/post";
import { fetchAllTags } from "@/api/fetchers/tags";

type Props = {
  tags?: Tag[];
  error?: string;
};
const Page: NextPage<Props> = ({ tags, error }) => {
  return (
    <>
      <CustomHead title="タグ一覧" />
      <PageTitle>
        <AiOutlineTags className="mr-2" />
        タグ一覧
      </PageTitle>
      {tags ? <AllTagsList tags={tags} /> : <p>{error}</p>}
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const data = await fetchAllTags();
    const tags = data.contents;
    return { props: { tags }, revalidate: 180 };
  } catch (err) {
    return { props: { error: err.message }, revalidate: 180 };
  }
};

export default Page;
