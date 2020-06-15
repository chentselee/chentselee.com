import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <section>
        <Link href="/">
          <a>李承澤</a>
        </Link>
        <span>開發者</span>
      </section>
      <style jsx>
        {`
          a {
            color: white;
            font-size: 1.5rem;
            font-weight: 500;
            text-decoration: none;
          }

          span {
            display: none;
          }

          @media (min-width: 640px) {
            a {
              font-size: 2rem;
            }

            span {
              display: block;
              margin-top: 5px;
              color: rgba(255, 255, 255, 0.5);
              font-size: 0.8rem;
              text-transform: capitalize;
              text-align: right;
            }
          }
        `}
      </style>
    </>
  );
};

export default Logo;
