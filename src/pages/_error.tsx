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
  // 404/405の時Not Found、500の問Internal Server Errorが出るように正しく処理すれば良いだろう
  return <Error statusCode={statusCode} />;
};

// Error.getInitialProps = async ({ res, err }: NextPageContext) => {
//   // statusCodeを算出する。
//   // - resが存在する時はSSRであり、res.statusCodeをそのまま利用すれば良い。
//   // - resがない場合はCSRである。
//   //   - err.statusCodeがあればそれをそのまま利用する
//   //   - 意図しない例外が起きてerrがここに渡ってくる場合、単なるErrorオブジェクトが入っていてstatusCodeプロパティがない。errがある時点でISEなので500にする
//   // See Also: https://nextjs.org/docs/advanced-features/custom-error-page
//   const statusCode = res ? res.statusCode : err ? err.statusCode ?? 500 : 404;

//   return { statusCode };
// };

export default Page;
