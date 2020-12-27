import Head from "next/head";

type Props = {
  title: string;
};

export const CustomHead = ({ title }: Props): JSX.Element => {
  return (
    <Head>
      <title>{title} - naroBlog</title>
    </Head>
  );
};
