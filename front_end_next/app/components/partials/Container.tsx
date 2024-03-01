"use client";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className="
      mx-auto
      max-w-[2520px]
      px-4
      sm:px-1
      md:px-4
      xl:px-6
      "
    >
      {children}
    </div>
  );
};

export default Container;
