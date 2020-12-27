import { FC } from "react";

export const PageTitle: FC = ({ children }) => {
  return (
    <h1 className="text-3xl mt-2 mb-6 font-bold flex items-center">
      {children}
    </h1>
  );
};
