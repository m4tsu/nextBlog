import React from "react";
import { NextPage } from "next";
import Error from "next/error";

// production時(next buildの成果物を使っている時)のエラー表示に使われる
// See Also: https://nextjs.org/docs/advanced-features/custom-error-page

interface Props {
  statusCode: number;
}
const Page: NextPage<Props> = ({ statusCode }) => {
  // ここでエラーページをちゃんと構築する。statusCodeが400の時BadRequest、
  // 404/405の時Not Found、500の問Internal Server Errorが出るように正しく処理すれば良い?
  return <Error statusCode={statusCode} />;
};

export default Page;
