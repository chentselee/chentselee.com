import React from "react";

export interface ProjectCardProps {
  title: string;
  image: {
    URL: string;
    alt: string;
  };
  techs: string[];
  projectURL: string;
  sourceURL: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  techs,
  projectURL,
  sourceURL,
}) => {
  return (
    <>
      <section className="card">
        <header>
          <h2>{title}</h2>
        </header>
        <main>
          <a
            href={projectURL}
            className="image"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={image.URL} alt={image.alt} />
          </a>
          <section className="detail">
            <ul>
              {techs.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <nav>
              <a
                className="to-project"
                href={projectURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                前往作品
              </a>
              <a
                className="to-source"
                href={sourceURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                原始碼
              </a>
            </nav>
          </section>
        </main>
      </section>
      <style jsx>
        {`
          .card {
            max-width: 380px;
            margin-bottom: 2rem;
            display: flex;
            flex-direction: column;
          }

          @supports (display: grid) {
            .card {
              margin: 0;
            }
          }

          @supports (display: subgrid) {
            .card {
              gap: 0.5rem;
            }
          }

          h2 {
            margin-bottom: 0.5rem;
            color: var(--text-gray);
          }

          @supports (display: subgrid) {
            h2 {
              margin-bottom: 0;
            }
          }

          h2::before {
            content: "# ";
          }

          main {
            flex-grow: 1;
            display: flex;
            border-radius: 8px;
            box-shadow: var(--shadow-lg);
            overflow: hidden;
          }

          .image {
            flex-basis: 70%;
            flex-grow: 1;
            flex-shrink: 0;
            overflow: hidden;
          }

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: left;
            transition: object-position 300ms;
          }

          .image:hover > img {
            object-position: right;
          }

          .detail {
            min-height: 180px;
            padding: 12px;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            background-color: white;
          }

          @supports (display: subgrid) {
            .detail {
              gap: 1rem;
            }
          }

          ul {
            margin-bottom: 1rem;
            display: flex;
            align-content: start;
            flex-wrap: wrap;
            list-style: none;
          }

          ul > :not(:last-child) {
            margin-bottom: 5px;
          }

          @supports (display: subgrid) {
            ul {
              margin-bottom: 0;
              gap: 4px;
            }

            ul > :not(:last-child) {
              margin-bottom: 0;
            }
          }

          li {
            padding: 4px 12px;
            background-color: var(--primary);
            border-radius: 16px;
            font-size: 0.6rem;
            letter-spacing: 0.8px;
            color: white;
            box-shadow: var(--shadow);
          }

          p {
            font-size: 1rem;
          }

          nav {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 0.9rem;
          }

          @supports (display: subgrid) {
            nav {
              gap: 5px;
            }
          }

          nav > a {
            width: 90%;
            padding: 5px 2px;
            border-radius: 5px;
            color: white;
            font-size: 0.7rem;
            text-decoration: none;
            text-align: center;
            box-shadow: var(--shadow);
            transition: transform 300ms;
          }

          nav > :not(:last-child) {
            margin-bottom: 5px;
          }

          @supports (display: subgrid) {
            nav > :not(:last-child) {
              margin-bottom: 0;
            }
          }

          nav > a:hover {
            transform: scale(1.1);
          }

          .to-project {
            background-color: var(--success);
          }

          .to-source {
            background-color: var(--info);
          }

          @media (min-width: 640px) {
            .card {
              width: calc(210px + 20%);
            }

            .card > :not(:last-child) {
              margin-right: 2rem;
            }

            @supports (display: grid) {
              .card {
                width: 100%;
              }

              .card > :not(:last-child) {
                margin-right: 0;
              }
            }
          }
        `}
      </style>
    </>
  );
};

export default ProjectCard;
