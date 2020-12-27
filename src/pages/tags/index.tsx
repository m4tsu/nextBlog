import { NextPage } from "next";
import { AiOutlineTags } from "react-icons/ai";
import { useGetTags } from "../../api/tags";
import { Loading } from "../../components/commons/Loading";
import { PageTitle } from "../../components/commons/PageTitle";
import { CustomHead } from "../../components/layouts/CustomHead";
import { AllTagsList } from "../../components/page/tags/AllTagsList";

const TagsPage: NextPage = () => {
  const { data, error } = useGetTags();
  console.log(data);
  return (
    <>
      <CustomHead title="タグ一覧" />
      <PageTitle>
        <AiOutlineTags className="mr-2" />
        タグ一覧
      </PageTitle>
      {data ? (
        <AllTagsList tags={data.contents} />
      ) : (
        <Loading loading={!data} />
      )}
    </>
  );
};

export default TagsPage;
