import React, { ReactNode } from "react";
import Head from "next/head";
import { Container } from "./Container";
import { Main } from "./Main";
import { HeaderNav } from "./HeaderNav";

const DefaultTitle = "naroBlog";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = DefaultTitle }: Props) => (
  <div className="h-screen flex flex-col ">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <HeaderNav />
    </header>
    <Main>{children}</Main>

    {/* <footer>
      <hr />
      <Container className="py-1">
        <span>Footer</span>
      </Container>
    </footer> */}
  </div>
);

export default Layout;
