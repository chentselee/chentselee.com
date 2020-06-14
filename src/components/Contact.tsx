import React from "react";

const Contact = () => {
  return (
    <>
      <section>
        <a
          href="https://github.com/chentselee"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/icons/github.svg" alt="github" />
          <span>github</span>
        </a>
        <a href="mailto:chentselee@gmail.com">
          <img src="/assets/icons/mail.svg" alt="email" />
          <span>email</span>
        </a>
        <a
          href="https://line.me/ti/p/2eyZ-wD5OB"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/icons/line.svg" alt="line messenger" />
          <span>line</span>
        </a>
      </section>
      <style jsx>
        {`
          section {
            display: flex;
            justify-content: center;
            gap: 1.2rem;
          }

          img {
            width: 25px;
            filter: invert(100%) sepia(11%) saturate(0%) hue-rotate(40deg)
              brightness(100%) contrast(104%);
          }

          span {
            display: none;
          }

          a:hover {
            filter: var(--primary-filter);
          }

          @media (min-width: 640px) {
            section {
              flex-direction: column;
            }

            a {
              display: flex;
              align-items: center;
              column-gap: 1rem;
              color: white;
              text-transform: capitalize;
              text-decoration: none;
              font-family: "Source Code Pro", monospace;
            }

            span {
              display: block;
            }
          }
        `}
      </style>
    </>
  );
};

export default Contact;
