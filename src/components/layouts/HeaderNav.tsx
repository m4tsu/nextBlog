import { FC } from "react";
import { Paths, TypedLink } from "@/routes";
import { Container } from "./Container";

export const HeaderNav: FC = () => {
  return (
    <nav className="bg-primary border-b border-white">
      <Container className="md:flex items-center justify-between py-2 ">
        <div className="text-2xl font-bold text-white">
          <TypedLink path={Paths.posts}>naroBlog</TypedLink>
        </div>
        <div className="flex flex-col md:flex-row md:block -mx-2">
          <TypedLink
            path={Paths.about}
            className="text-white text-xl font-bold rounded p-2 ml-2"
          >
            About
          </TypedLink>
          <TypedLink
            path={Paths.tags}
            className="text-white text-xl font-bold rounded p-2 ml-2"
          >
            タグ一覧
          </TypedLink>
        </div>
      </Container>
    </nav>
  );
};
