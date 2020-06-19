import React from "react";
import Main from "../layouts/Main";
import Page from "../layouts/Page";

const resume = () => {
  return (
    <>
      <Main>
        <Page title="履歷">
          <article>
            <ul>
              <li>
                <a
                  href="/assets/documents/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PDF
                </a>
              </li>
              <li>
                <a
                  href="https://www.cakeresume.com/chentse-lee"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CakeResume
                </a>
              </li>
            </ul>
          </article>
        </Page>
      </Main>
      <style jsx>
        {`
          article {
            padding: 1.5rem;
            background-color: var(--bg-light);
            border-radius: 1rem;
            line-height: 1.5rem;
          }

          article > :not(:last-child) {
            margin-bottom: 1rem;
          }

          ul {
            list-style-position: inside;
          }

          ul > :not(:last-child) {
            margin-bottom: 4px;
          }

          a {
            color: var(--primary);
          }
        `}
      </style>
    </>
  );
};

export default resume;
