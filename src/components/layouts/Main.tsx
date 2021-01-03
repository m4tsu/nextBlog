import React, { FC } from "react";
import { Aside } from "@/components/layouts/Aside";
import { Container } from "@/components/layouts/Container";

export const Main: FC = ({ children }) => {
  return (
    <main className="bg-primary py-10">
      <Container className="h-full">
        <div className="flex flex-col md:flex-row w-full h-full rounded mx-auto items-center md:items-start">
          <div className="rounded p-5 w-full md:mr-2 bg-primary text-white border-white border-4 mb-5">
            {children}
          </div>
          <Aside />
        </div>
      </Container>
    </main>
  );
};
