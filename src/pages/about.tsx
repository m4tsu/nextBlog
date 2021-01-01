import { PageTitle } from "@/components/commons/PageTitle";
import { NextPage } from "next";

const AboutPage: NextPage = () => (
  <>
    <PageTitle>自分とこのブログについて</PageTitle>
    <p>
      Ruby(Ruby on Rails) メインの開発をしていたけど、最近{" "}
      <strong>TypeScript</strong> / <strong>React</strong>
      でのフロントエンド開発に入りハマりはじめたWebアプリケーションエンジニアです。
    </p>
    <p>直近の興味はフロントエンドのアーキテクチャです。</p>
    <br />
    <p>
      Next.jsの勉強がてらにブログを作ったので学んだことを書いていこうと思います。
    </p>
    <br />
    <p>
      1から説明していくというよりは、自分が学ぶ中で疑問に思ったことやその解決策などをメモのように残していく形が多くなると思います。
    </p>
  </>
);

export default AboutPage;
