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
          }

          section > :not(:last-child) {
            margin-right: 1.2rem;
          }

          @supports (display: subgrid) {
            section {
              gap: 1.2rem;
            }

            section > :not(:last-child) {
              margin-right: 0;
            }
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

            section > :not(:last-child) {
              margin-bottom: 1.2rem;
            }

            @supports (display: subgrid) {
              section > :not(:last-child) {
                margin-bottom: 0;
              }
            }

            a {
              display: flex;
              align-items: center;
              color: white;
              text-transform: capitalize;
              text-decoration: none;
              font-family: "Source Code Pro", monospace;
            }

            a > :not(:last-child) {
              margin-right: 1rem;
            }

            @supports (display: subgrid) {
              column-gap: 1rem;
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
