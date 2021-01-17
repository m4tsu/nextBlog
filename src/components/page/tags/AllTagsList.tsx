import React, { FC } from "react";
import { AiOutlineTag } from "react-icons/ai";
import { Paths, TypedLink } from "@/routes";
import { Tag } from "@/types/API/post";

type Props = {
  tags: Tag[];
};

export const AllTagsList: FC<Props> = ({ tags }) => {
  return (
    <ul>
      {tags.map((tag) => (
        <li key={tag.id} className="bg-white rounded border-white border my-2">
          <TypedLink
            path={Paths.tag}
            params={{ name: tag.name }}
            className="bg-primary flex items-center p-2 rounded hover:opacity-60"
          >
            <AiOutlineTag className="mr-2" />
            {tag.name}
          </TypedLink>
        </li>
      ))}
    </ul>
  );
};
