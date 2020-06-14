import React from "react";
import Contact from "./Contact";

const Footer = () => {
  return (
    <>
      <footer>
        <Contact />
      </footer>
      <style jsx>
        {`
          footer {
            padding: var(--nav-padding);
            background-color: var(--nav-bg);
          }

          @media (min-width: 640px) {
            footer {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
};

export default Footer;
