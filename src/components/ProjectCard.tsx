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
            max-width: 390px;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }

          h2 {
            color: var(--text-gray);
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
            gap: 1rem;
            background-color: white;
          }

          ul {
            display: flex;
            flex-wrap: wrap;
            list-style: none;
            gap: 4px;
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
            gap: 5px;
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

          nav > a:hover {
            transform: scale(1.1);
          }

          .to-project {
            background-color: var(--success);
          }

          .to-source {
            background-color: var(--info);
          }
        `}
      </style>
    </>
  );
};

export default ProjectCard;
