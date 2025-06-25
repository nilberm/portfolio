import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import logoProject from "../../assets/projects/lego-desktop.png";
import digitalTeamsProject from "../../assets/projects/digital-teams-project.png";
import movieStreamerProject from "../../assets/projects/movies-streamer-projects.png";
import kanbanProject from "../../assets/projects/kanban-project.png";
import museumVisitorProject from "../../assets/projects/museum-project.png";
import rickAndMortyProject from "../../assets/projects/rickAndMorty-project.png";

type Project = {
  title: {
    en: string;
    pt: string;
  };
  description: {
    en: string;
    pt: string;
  };
  imageUrl: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
};

const projects = [
  {
    title: {
      en: "Lego Media Hub",
      pt: "Lego Media Hub",
    },
    description: {
      en: "A media content hub built with React and Vite for a job assessment. Includes a modern UI for exploring and managing media entries.",
      pt: "Um hub de conteúdo de mídia construído com React e Vite para um teste de vaga. Interface moderna para explorar e gerenciar conteúdos.",
    },
    imageUrl: logoProject,
    tags: ["React", "Vite", "TypeScript", "CSS Modules"],
    githubUrl: "https://github.com/nilberm/lego-media-hub-react",
    liveUrl: "https://lego-media-hub.netlify.app/",
  },
  {
    title: {
      en: "Digital Teams",
      pt: "Digital Teams",
    },
    description: {
      en: "A responsive landing page built with Next.js and Sass, replicating a Figma design. Includes localStorage customization for user settings.",
      pt: "Landing page responsiva feita com Next.js e Sass, replicando um design do Figma. Inclui personalização via localStorage.",
    },
    imageUrl: digitalTeamsProject,
    tags: ["Next.js", "React", "TypeScript", "Sass", "localStorage"],
    githubUrl: "https://github.com/nilberm/digital-teams-nextjs",
    liveUrl: "https://digital-teams.netlify.app/",
  },
  {
    title: {
      en: "Movies Streamer",
      pt: "Movies Streamer",
    },
    description: {
      en: "A Vue.js web app that consumes the TMDb API to display movies and TV shows. Features include favorites list, content details, pagination, and full responsiveness.",
      pt: "App em Vue.js que consome a API do TMDb para exibir filmes e séries. Inclui lista de favoritos, detalhes dos conteúdos, paginação e design responsivo.",
    },
    imageUrl: movieStreamerProject,
    tags: ["Vue.js", "Tailwind CSS", "Axios", "TMDb API"],
    githubUrl: "https://github.com/nilberm/movies-streamer-vueJs",
    liveUrl: "https://movies-streamer.vercel.app/",
  },
  {
    title: {
      en: "Devmota Kanban",
      pt: "Devmota Kanban",
    },
    description: {
      en: "A drag-and-drop Kanban board built with React.js. Designed from scratch in Figma to enhance UI/UX and frontend development skills. Features intuitive card movement between columns for task organization.",
      pt: "Quadro Kanban com drag-and-drop feito com React. Design feito do zero no Figma, com movimentação intuitiva de cartões entre colunas.",
    },
    imageUrl: kanbanProject,
    tags: ["React", "Figma", "Drag and Drop", "Kanban", "UI/UX"],
    githubUrl: "https://github.com/nilberm/kanban",
    liveUrl: "https://devmota.netlify.app/",
  },
  {
    title: {
      en: "Museum Visitor Registration",
      pt: "Registro de Visitantes de Museu",
    },
    description: {
      en: "A web application for registering museum visitors, built with React, TypeScript, and Vite. It features a user-friendly interface for managing visitor entries and integrates with a backend API for data persistence.",
      pt: "Aplicação para registro de visitantes de museu, feita com React, TypeScript e Vite. Possui interface amigável e integração com API para persistência dos dados.",
    },
    imageUrl: museumVisitorProject,
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    githubUrl: "https://github.com/nilberm/web-visitor-registration",
    liveUrl: "https://museum-ce.vercel.app/",
  },
  {
    title: {
      en: "Rick and Morty Episodes Manager",
      pt: "Gerenciador de Episódios Rick and Morty",
    },
    description: {
      en: "A complete challenge app built for AZShip that allows browsing, filtering, and managing Rick and Morty episodes with favorites, seen status, pagination, and dark mode.",
      pt: "Aplicação completa construída para a AZShip para navegar, filtrar e gerenciar episódios de Rick and Morty com favoritos, vistos, paginação e modo escuro.",
    },
    imageUrl: rickAndMortyProject,
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "GraphQL", "Zustand"],
    githubUrl: "https://github.com/nilberm/azs-web-rickandmorty",
    liveUrl: "https://azs-web-rickandmorty-7evz.vercel.app/",
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const { language } = useLanguage();
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200 dark:border-slate-700 overflow-hidden">
      <img
        src={project.imageUrl}
        alt={`${project.title[language]} preview`}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-sora font-semibold text-slate-900 dark:text-slate-50 mb-2">
          {project.title[language]}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          {project.description[language]}
        </p>
        <div className="flex flex-wrap mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-blue-600/20 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-500 font-medium hover:underline"
            aria-label={`View ${project.title[language]} live`}
          >
            Live
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-500 font-medium hover:underline"
            aria-label={`View ${project.title[language]} source on GitHub`}
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const { language } = useLanguage();
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-sora font-bold mb-8 md:mb-12 text-center text-slate-900 dark:text-slate-50 ">
          {language === "en" ? "Personal Projects" : "Projetos Pessoais"}
        </h2>
        <p className="text-lg md:text-xl text-center text-slate-600 dark:text-slate-400 mb-10 md:mb-16 max-w-2xl mx-auto">
          {language === "en"
            ? "A selection of personal projects where I explored technologies, improved my skills, and built real-world solutions."
            : "Uma seleção de projetos pessoais onde explorei tecnologias, desenvolvi habilidades e construí soluções reais."}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((p) => (
            <ProjectCard key={p.title.en} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
