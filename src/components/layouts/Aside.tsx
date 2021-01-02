import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";

export const Aside = () => {
  return (
    <aside className="w-60 rounded bg-primary">
      <div className="mb-1 border-b border-secondary p-5 bg-white text-secondary rounded">
        <div className="font-bold mb-2 flex flex-col">
          <div className="w-full flex justify-center">
            <img
              className="block rounded-full w-11 h-11 mb-1"
              src="/twitter_icon.jpg"
              alt="ツイッターのアイコン"
            />
          </div>

          <div className="flex justify-center mb-1">
            <p>なろ</p>
          </div>
          <div className="flex justify-center mb-1">
            <a href="https://twitter.com/neet_on_rails" target="_blank">
              <AiFillTwitterCircle className="text-twitter text-3xl inline-block" />
            </a>
          </div>
        </div>

        <div className="break-words">
          <p className="text-sm">React, TypeScript が好きです。</p>
        </div>
      </div>
    </aside>
  );
};
