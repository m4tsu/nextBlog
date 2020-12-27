import { FC } from "react";

export const Container: FC<{className?: string}> = ({ children, className = '' }) => {
  return (
    <div className={`w-full lg:max-w-5xl px-10 lg:px-0 mx-auto ${className}`}>
      {children}
    </div>
  )
}