import React from "react";

interface ContentProps {
  children: any;
}

const Content = ({ children }: ContentProps) => {
  return (
    <div className="mx-2 my-2 text-lg text-left md:mx-4 md:text-left md:text-xl xl:text-2xl">
      {children}
    </div>
  );
};

export default Content;
