import fs from "fs";
import path from "path";
import Main from "../layouts/Main";
import ProjectCard from "../components/ProjectCard";
import Page from "../layouts/Page";
import { ProjectCardProps } from "../components/ProjectCard";

const Home: React.FC<{ projects: ProjectCardProps[] }> = ({ projects }) => {
  return (
    <>
      <Main>
        <Page title="作品集">
          <div>
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </Page>
      </Main>
      <style jsx>
        {`
          h1 {
            color: var(--text-gray);
          }

          div {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }

          @supports (display: grid) {
            div {
              display: grid;
              grid-template-columns: repeat(
                auto-fill,
                minmax(300px, max-content)
              );
              gap: 2rem;
              grid-gap: 2rem;
            }
          }
        `}
      </style>
    </>
  );
};

export async function getStaticProps() {
  const projects = JSON.parse(
    fs.readFileSync(
      path.resolve(process.cwd(), "public", "assets", "json", "projects.json"),
      "utf-8"
    )
  );

  return {
    props: {
      projects,
    },
  };
}

export default Home;
