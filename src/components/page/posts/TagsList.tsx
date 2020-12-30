import React, { FC } from "react";
import { AiOutlineTags } from "react-icons/ai";
import { Paths, TypedLink } from "@/routes";
import { Tag } from "@/types/API/post";

type Props = {
  tags: Tag[];
};

export const TagsList: FC<Props> = ({ tags }) => {
  return (
    <div className="flex flex-row items-center">
      <AiOutlineTags size="24px" className="text-white flex-shrink-0" />
      <ul className="flex flex-row flex-wrap">
        {tags.map((tag) => (
          <li
            key={tag.id}
            className="bg-white text-primary font-semibold m-1 p-1 text-sm rounded hover:opacity-70"
          >
            <TypedLink path={Paths.tag} params={{ name: tag.name }}>
              {tag.name}
            </TypedLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
