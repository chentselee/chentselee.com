import React from "react";

const Page: React.FC<{ title: string }> = ({ title = "", children }) => {
  return (
    <>
      <article>
        <header>
          <h1>{title}</h1>
        </header>
        <main>{children}</main>
      </article>
      <style jsx>
        {`
          h1 {
            margin-bottom: 1rem;
            color: black;
          }
        `}
      </style>
    </>
  );
};

export default Page;
