import React, { FC } from "react";
import { Container } from "./Container";

export const Main: FC = ({ children }) => {
  return (
    <main className="bg-primary py-10">
      <Container className="h-full">
        <div className="flex w-full h-full rounded mx-auto justify-between">
          <div className="rounded p-5 w-full mr-2 bg-primary text-white border-white border-4">
            {children}
          </div>
          <aside className="w-60 rounded bg-primary">
            <div className="mb-1 border-b border-secondary p-5 bg-white text-secondary rounded">
              <p className="font-bold mb-2">MY name</p>
              <p className="break-words">
                hogehohjgeohgeoheoghohhogeh hoghegh ghohge hoghoege
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
};
