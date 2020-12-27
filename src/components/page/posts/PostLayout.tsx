import React, { FC } from "react";
import { Tag } from "../../../types/API/post";

type Props = {
  tags?: Tag[];
};

export const PostLayout: FC<Props> = ({ children, tags }) => {
  return (
    <div className="flex w-full h-full rounded mx-auto justify-between">
      <div className="rounded p-5 w-full mr-1 bg-primary text-white border-secondary border-2">
        {children}
      </div>
      <aside className="w-60 rounded bg-primary">
        <div className="">
          {/* {tags && (
            <div className="mb-5 p-5 bg-primary text-white rounded">
              <ul>
                {tags.map((tag) => (
                  <li key={tag.id}>{tag.name}</li>
                ))}
              </ul>
            </div>
          )} */}
          <div className="mb-1 border-b border-secondary p-5 bg-white text-gray-600 rounded">
            <p className="font-bold mb-2">MY name</p>
            <p className="break-words">
              hogehohjgeohgeoheoghohhogeh hoghegh ghohge hoghoege
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
};
