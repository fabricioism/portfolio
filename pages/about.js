import Link from 'next/link';
import { NextSeo } from 'next-seo';

import Container from '@/components/Container';

const Talk = ({ title, link, children }) => (
  <>
    <h3 className="font-medium mb-2 text-lg">
      <a
        className="flex items-center text-gray-900 dark:text-gray-100"
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        {title}
        <div>
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      </a>
    </h3>
    <p className="text-gray-600 dark:text-gray-400 mb-8">{children}</p>
  </>
);

export default function About() {
  return (
    <Container>
      <NextSeo
        title="About Me – Fabricio Murillo"
        canonical="https://fabricio.com/about"
        openGraph={{
          url: 'https://fabricio.com/about',
          title: 'About Me – Fabricio Murillo'
        }}
      />
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>
            Hi there! I’m Fabricio, I'm a developer and math student, and soccer
            lover. &nbsp;I work at Premper Design as a Software engineer.
          </p>
        </div>
        <h2 className="font-bold text-3xl tracking-tight mb-4 text-black dark:text-white">
          Posts
        </h2>
        <Talk
          title="Creando aplicaciones de Next.js y publicándolas en Vercel usando mono repositorios con Yarn Workspaces"
          link="https://fabricioism.medium.com/creando-aplicaciones-de-next-js-9c9633eba23d"
        >
          Hoy en día existen muchas facilidades y herramientas muy útiles para
          desarrollar proyectos de software. Next.js es simplemente fenomenal y
          su combinación con vercel nos permite olvidarnos de cosas como la
          gestión de servidores y centrarnos únicamente en desarrollar nuestro
          producto, teniendo la confianza de usar una plataforma en la que creen
          compañías como Uber, McDonald’s, entre otras.
        </Talk>
      </div>
    </Container>
  );
}
