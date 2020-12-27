import { FC } from "react";
import { Paths, TypedLink } from "../../../routes";

export const ResourceNotFound = () => {
  return (
    <div>
      <h2 className="text-2xl">リソースが見つかりません。</h2>
      <TypedLink path={Paths.posts}>TOPに戻る</TypedLink>
    </div>
  );
};
