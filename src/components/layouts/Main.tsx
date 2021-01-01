import React, { FC } from "react";
import { Aside } from "@/components/layouts/Aside";
import { Container } from "@/components/layouts/Container";

export const Main: FC = ({ children }) => {
  return (
    <main className="bg-primary py-10">
      <Container className="h-full">
        <div className="flex w-full h-full rounded mx-auto justify-between">
          <div className="rounded p-5 w-full mr-2 bg-primary text-white border-white border-4">
            {children}
          </div>
          <Aside />
        </div>
      </Container>
    </main>
  );
};
