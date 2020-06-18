import React from "react";
import Link from "next/link";
import Contact from "./Contact";
import Logo from "./Logo";

interface link {
  name: string;
  href: string;
}

const links: link[] = [
  {
    name: "作品集",
    href: "/",
  },
  {
    name: "關於",
    href: "/about",
  },
];

const Navbar = () => {
  return (
    <>
      <aside>
        <nav>
          <Logo />
          <ul>
            {links.map((link) => (
              <li key={link.name}>
                <Link href={link.href}>
                  <a>{link.name}</a>
                </Link>
              </li>
            ))}
          </ul>
          <div className="contact">
            <Contact />
          </div>
        </nav>
      </aside>
      <style jsx>
        {`
          aside {
            padding: var(--nav-padding);
            background-color: var(--nav-bg);
            position: sticky;
            top: 0;
            box-shadow: var(--nav-shadow);
          }

          nav {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
          }

          ul {
            list-style: none;
            display: flex;
            justify-content: space-evenly;
          }

          ul > :not(:last-child) {
            margin-right: 1.5rem;
          }

          @supports (display: subgrid) {
            ul {
              gap: 1.5rem;
            }

            ul > :not(:last-child) {
              margin-right: 0;
            }
          }

          a {
            color: white;
            font-size: 1rem;
            text-decoration: underline;
            transition-property: color border;
            transition-duration: 350ms;
          }

          a:hover {
            color: var(--primary);
          }

          .contact {
            display: none;
          }

          @media (min-width: 640px) {
            aside {
              width: max-content;
              height: 100vh;
              padding: 2rem 4%;
            }

            nav {
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: stretch;
            }

            nav > :not(:last-child) {
              margin-bottom: 2rem;
            }

            @supports (display: subgrid) {
              nav {
                gap: 2.5rem;
              }

              nav > :not(:last-child) {
                margin-bottom: 0;
              }
            }

            ul {
              margin-top: 2rem;
              flex-direction: column;
              justify-content: flex-start;
              flex-grow: 1;
            }

            ul > :not(:last-child) {
              margin-right: 0;
              margin-bottom: 1.5rem;
            }

            a {
              display: block;
              padding: 0.7rem 1.5rem;
              border: 0.5px solid white;
              text-decoration: none;
              text-align: center;
            }

            a:hover {
              border-color: var(--primary);
            }

            .contact {
              display: block;
            }
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
