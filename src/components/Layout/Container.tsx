import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div
      className="mx-auto flex max-w-[1200px] flex-col
    items-center px-2 py-6 sm:px-2 md:px-10 xl:px-20
    "
    >
      {children}
    </div>
  );
};

export default Container;
